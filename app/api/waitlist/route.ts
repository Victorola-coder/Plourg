import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { sendWaitlistEmail } from '@/app/lib/email'
import { z } from 'zod'

const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  location: z.string().min(1, 'Location is required'),
  university: z.string().min(1, 'University is required'),
  feedback: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.waitlist.findFirst({
      where: {
        phone: validatedData.phone
      }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'You are already on our waitlist!' },
        { status: 400 }
      )
    }
    
    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlist.create({
      data: validatedData
    })
    
    // Send email notification
    try {
      await sendWaitlistEmail(validatedData)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails
    }
    
    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist!',
        id: waitlistEntry.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Waitlist submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Waitlist API endpoint' })
}
