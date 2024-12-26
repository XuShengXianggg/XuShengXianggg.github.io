import type { Metadata } from 'next'
import './globals.css'
import Navigation from './component/navigation'
import Sidebar from './component/sidebar'

export const metadata: Metadata = {
  title: 'Shengxiang Xu',
  description: 'Personal academic website',
  icons: {
    icon: '/head.jpg', // 或者 '/favicon.png' 如果你使用的是PNG格式
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="layout-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

