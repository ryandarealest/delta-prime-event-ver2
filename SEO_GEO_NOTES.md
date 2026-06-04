# SEO / GEO cho Delta Prime Event

Bản này đã được chỉnh lại để website chỉ tập trung vào mảng **Event**. Các keyword và schema liên quan đến Wedding / Audio đã được bỏ khỏi metadata, nội dung SEO, sitemap và JSON-LD để Google không hiểu sai chủ đề chính của website.

## File đã chỉnh
- `src/lib/site.ts`: cấu hình thương hiệu Delta Prime Event, domain, địa chỉ, keyword và danh sách dịch vụ event.
- `src/app/layout.tsx`: metadata, title, description, Open Graph, Twitter Card, canonical, robots meta.
- `src/components/JsonLd.tsx`: schema JSON-LD cho `Organization`, `ProfessionalService`, `WebSite`, `Service`.
- `src/app/sitemap.ts`: sitemap cho one-page website.
- `src/app/robots.ts`: robots.txt tự sinh.
- `src/components/HeroTranscend.tsx`: nav và copy chuyển sang event only.
- `src/components/UpcomingEvents.tsx`: card sự kiện đổi sang event / product launch / activation.
- `src/components/AboutGlow.tsx`: services tập trung vào corporate event, conference, activation.
- `src/components/EventDetail.tsx`: nội dung dịch vụ tổ chức sự kiện trọn gói.
- `src/components/TranscendFooter.tsx`: footer NAP + keyword địa phương cho event.
- `.env.example`: dùng link Vercel tạm thời nếu chưa có domain.

## Keyword chính
- tổ chức sự kiện Đà Nẵng
- công ty tổ chức sự kiện Đà Nẵng
- event agency Đà Nẵng
- event production Đà Nẵng
- tổ chức sự kiện doanh nghiệp Đà Nẵng
- tổ chức hội nghị Đà Nẵng
- tổ chức hội thảo Đà Nẵng
- tổ chức khai trương Đà Nẵng
- activation Đà Nẵng
- roadshow Đà Nẵng
- gala dinner Đà Nẵng

## Việc cần làm trước khi deploy chính thức
1. Mở `src/lib/site.ts` và sửa:
   - `url`: link Vercel hiện tại hoặc domain thật.
   - `phone`: số điện thoại thật.
   - `email`: email thật.
   - `socialLinks`: link Facebook / Instagram thật.
   - `address`: địa chỉ cụ thể hơn nếu có.
2. Nếu deploy Vercel, vào Project Settings → Environment Variables và thêm:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://link-vercel-cua-ban.vercel.app
   ```
3. Sau khi deploy, kiểm tra:
   - `/sitemap.xml`
   - `/robots.txt`
   - Google Rich Results Test
   - Google Search Console

## Khi mua tên miền riêng
Chỉ cần đổi `NEXT_PUBLIC_SITE_URL` và `siteConfig.url` sang domain thật, ví dụ:

```bash
NEXT_PUBLIC_SITE_URL=https://deltaprimeevent.vn
```

Sau đó deploy lại.
