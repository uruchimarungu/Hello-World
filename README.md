# Hello World - Next.js App Router + Vanilla CSS

Một website "Hello World" đơn giản được xây dựng bằng **Next.js 14+** (App Router) và **CSS thuần** (Vanilla CSS).

## 📋 Yêu cầu

- Node.js 18.17+ hoặc cao hơn
- npm hoặc yarn hoặc pnpm

## 🚀 Hướng dẫn Cài đặt & Chạy

### 1. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### 2. Chạy ở chế độ Development

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Server sẽ khởi động tại **http://localhost:3000**

Mở trình duyệt và truy cập địa chỉ trên để xem trang web.

### 3. Build cho Production

```bash
npm run build
```

### 4. Chạy ở chế độ Production

```bash
npm start
```

## 📁 Cấu trúc Dự án

```
.
├── app/                    # Thư mục App Router
│   ├── layout.tsx         # Layout gốc (bao bọc tất cả các trang)
│   ├── page.tsx           # Trang chủ (route: /)
│   └── globals.css        # CSS global cho toàn bộ ứng dụng
├── package.json           # Cấu hình dự án và dependencies
├── tsconfig.json          # Cấu hình TypeScript
├── next.config.js         # Cấu hình Next.js
├── .gitignore             # Các file/folder bị bỏ qua bởi Git
└── README.md              # File này
```

## 📄 Giải thích các File

### `package.json`
- Định nghĩa dependencies của dự án
- Scripts để chạy dev, build, start
- Metadata của dự án (name, version, description)

### `tsconfig.json`
- Cấu hình TypeScript compiler
- Đặt `jsx: "preserve"` để Next.js xử lý JSX
- Bật strict mode để kiểm tra kiểu dữ liệu

### `next.config.js`
- Cấu hình Next.js
- Bật React Strict Mode

### `app/layout.tsx`
- **Root Layout** - bao bọc toàn bộ ứng dụng
- Định nghĩa thẻ `<html>`, `<head>`, `<body>`
- Khai báo Metadata (tiêu đề trang, mô tả, favicon, v.v.)
- Import CSS global

### `app/page.tsx`
- **Home Page** - trang chủ được render tại route `/`
- Hiển thị tiêu đề "Hello, World!"
- Chứa mô tả ngắn
- Có nút CTA (Call-to-Action)

### `app/globals.css`
- CSS global cho toàn bộ ứng dụng
- Định nghĩa CSS Variables cho:
  - Màu sắc (primary, secondary, background, text)
  - Font (family, size)
  - Spacing (xs, sm, md, lg, xl)
  - Animation
- Các class utilities:
  - `.container` - bao bọc chính, căn giữa
  - `.hero` - container cho hero section
  - `.hero-title` - tiêu đề lớn
  - `.hero-description` - mô tả
  - `.accent-dot` - dấu chấm trang trí
  - `.cta-button` - nút hành động
- Animations:
  - `fadeIn` - hiệu ứng mờ dần vào
  - `pulse` - hiệu ứng nhịp đập
- Responsive Design:
  - Mobile-first approach
  - Breakpoint tại 768px (tablet) và 1024px (desktop)
- Accessibility:
  - Hỗ trợ `prefers-reduced-motion`
  - Dark mode support

## ✨ Các tính năng

✅ **Next.js 14+ App Router** - Cấu trúc dự án hiện đại
✅ **TypeScript** - Type-safe code
✅ **CSS Variables** - Quản lý styling dễ dàng
✅ **Responsive Design** - Hiển thị tốt trên cả mobile và desktop
✅ **Animations** - Hiệu ứng đơn giản (fadeIn, pulse)
✅ **Dark Mode** - Hỗ trợ dark mode (tùy chọn trong hệ thống)
✅ **Accessibility** - Hỗ trợ người dùng có nhu cầu đặc biệt
✅ **No Dependencies** - Không sử dụng UI libraries
✅ **Clean Code** - Code sạch với comment rõ ràng

## 🎨 Customization

Để thay đổi màu sắc, font, hoặc spacing, hãy chỉnh sửa **CSS Variables** trong `app/globals.css`:

```css
:root {
  --color-primary: #0ea5e9;    /* Màu chính */
  --color-secondary: #06b6d4;  /* Màu phụ */
  /* ... */
}
```

## 🌐 Deploy

### Deploy lên Vercel (khuyến khích)

```bash
npm i -g vercel
vercel
```

Làm theo hướng dẫn trên terminal để deploy.

### Deploy lên các nền tảng khác

- **Netlify**: Xây dựng với `npm run build` và static output
- **AWS Amplify**: Kết nối repository GitHub
- **GitHub Pages**: Export tĩnh và deploy

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 📝 License

MIT - Bạn có thể sử dụng tự do cho mục đích cá nhân và thương mại.

---

**Tạo bởi**: Copilot
**Ngày**: 2026
