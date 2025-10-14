import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Check for admin authentication
    const authHeader = request.headers.get('authorization')
    const adminSecret = process.env.ADMIN_SECRET_KEY
    
    if (!authHeader || authHeader !== `Bearer ${adminSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Get all waitlist entries
    const waitlist = await prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    // Convert to CSV format
    const csvHeader = 'Name,Phone,Location,University,Feedback,Created At\n'
    const csvRows = waitlist.map(entry => {
      const name = `"${entry.name.replace(/"/g, '""')}"`
      const phone = `"${entry.phone.replace(/"/g, '""')}"`
      const location = `"${entry.location.replace(/"/g, '""')}"`
      const university = `"${entry.university.replace(/"/g, '""')}"`
      const feedback = `"${(entry.feedback || '').replace(/"/g, '""')}"`
      const createdAt = entry.createdAt.toISOString()
      
      return `${name},${phone},${location},${university},${feedback},${createdAt}`
    }).join('\n')
    
    const csvContent = csvHeader + csvRows
    
    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="waitlist-${new Date().toISOString().split('T')[0]}.csv"`
      }
    })
    
  } catch (error) {
    console.error('CSV export error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
