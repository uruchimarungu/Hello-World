import type { Metadata } from 'next'
import './globals.css'

/**
 * Metadata - Thông tin meta cho SEO và trình duyệt
 * Được sử dụng cho:
 * - Tiêu đề trang
 * - Mô tả trang
 * - Favicon
 * - Open Graph tags
 */
export const metadata: Metadata = {
  title: 'Hello, World! - Next.js App',
  description: 'A simple Hello World website built with Next.js and vanilla CSS',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="%230ea5e9">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

/**
 * RootLayout - Layout gốc của ứng dụng
 * 
 * Đây là layout chính được áp dụng cho tất cả các trang.
 * Nó bao bọc toàn bộ nội dung của ứng dụng.
 * 
 * Props:
 * - children: Nội dung của trang con
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi">
      <head>
        {/* 
          Meta charset - Đặt bộ ký tự UTF-8 cho hỗ trợ các ký tự đặc biệt
          Được tự động thêm bởi Next.js, nhưng có thể khai báo rõ ràng nếu cần
        */}
      </head>
      <body>
        {/* 
          Render nội dung trang - được truyền vào qua props children
          Tất cả các trang sẽ được render tại đây
        */}
        {children}
      </body>
    </html>
  )
}
