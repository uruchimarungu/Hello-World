/**
 * Home Page - Trang chủ của ứng dụng
 * 
 * Đây là trang mặc định được render tại route "/"
 * Sử dụng App Router của Next.js
 * 
 * Cấu trúc:
 * - Container: Chứa toàn bộ nội dung, căn giữa
 * - Hero section: Tiêu đề chính và mô tả
 * - Call-to-action: Nút hành động
 */

export default function Home() {
  return (
    <main className="container">
      {/* Hero Section - Phần nội dung chính */}
      <div className="hero">
        {/* Tiêu đề chính - "Hello, World!" */}
        <h1 className="hero-title">
          Hello, <span style={{ color: 'var(--color-secondary)' }}>World!</span>
        </h1>

        {/* Đoạn mô tả ngắn */}
        <p className="hero-description">
          Chào mừng đến với website được xây dựng bằng{' '}
          <strong>Next.js 14+ (App Router)</strong> và <strong>CSS thuần</strong>.
        </p>

        {/* Mô tả chi tiết hơn */}
        <p className="hero-description" style={{ fontSize: 'var(--font-size-base)', fontWeight: 'normal' }}>
          Trang web này sử dụng CSS variables để quản lý styling, hỗ trợ responsive design, 
          và có các hiệu ứng animation tinh tế.
          <span className="accent-dot"></span>
        </p>

        {/* Call-to-action button - Nút hành động */}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="cta-button">
          Tìm hiểu về Next.js
        </a>
      </div>
    </main>
  )
}
