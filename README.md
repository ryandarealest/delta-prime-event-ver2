# Transcend Clone NextJS

## Chạy project

```bash
npm install
npm run dev
```

## Chèn ảnh

Thay 2 file này bằng ảnh của bạn:

```txt
public/images/bg.jpg
public/images/person.png
```

- `bg.jpg`: background gốc, full màn hình.
- `person.png`: ảnh người đã tách nền PNG/WebP.

Nếu muốn đổi tên file, sửa trong `src/app/globals.css`:

```css
.layer-bg { background-image: url('/images/bg.jpg'); }
.person { background-image: url('/images/person.png'); }
```
