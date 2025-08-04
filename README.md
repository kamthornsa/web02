# Portfolio Website

เว็บไซต์ Portfolio สำหรับนักพัฒนาซอฟต์แวร์ ที่สร้างด้วย HTML, Tailwind CSS และ JavaScript

## คุณสมบัติ

- 📱 **Responsive Design** - รองรับทุกขนาดหน้าจอ
- 🎨 **Modern UI/UX** - ออกแบบสวยงามด้วย Tailwind CSS
- ⚡ **Single Page Application** - โหลดเร็ว ใช้งานลื่น
- 🔧 **ปรับแต่งง่าย** - แก้ไขข้อมูลผ่านไฟล์ data.js
- 📧 **ฟอร์มติดต่อ** - รับข้อความจากผู้เยี่ยมชม
- 🌟 **แอนิเมชัน** - เอฟเฟกต์การเคลื่อนไหวที่นุ่มนวล

## โครงสร้างไฟล์

```
├── index.html          # หน้าเว็บหลัก
├── style.css           # CSS แบบกำหนดเอง
├── data.js             # ข้อมูล Portfolio
├── script.js           # JavaScript สำหรับการทำงาน
├── resume.pdf          # ไฟล์ CV (ต้องเพิ่มเอง)
└── README.md           # คู่มือการใช้งาน
```

## การติดตั้งและใช้งาน

1. **ดาวน์โหลดไฟล์**
   ```bash
   git clone [repository-url]
   cd portfolio-website
   ```

2. **แก้ไขข้อมูลส่วนตัว**
   - เปิดไฟล์ `data.js`
   - แก้ไขข้อมูลใน object `portfolioData`

3. **เพิ่มรูปภาพและไฟล์**
   - เพิ่มรูปโปรไฟล์และรูปโปรเจกต์
   - เพิ่มไฟล์ CV (resume.pdf)

4. **เปิดเว็บไซต์**
   - เปิดไฟล์ `index.html` ในเบราว์เซอร์
   - หรือใช้ Live Server ใน VS Code

## การปรับแต่งข้อมูล

### ข้อมูลส่วนตัว
```javascript
personal: {
    fullname: "ชื่อ-นามสกุล",
    position: "ตำแหน่งงาน",
    profileImage: "path/to/image.jpg",
    heroDescription: "คำอธิบายตัวเอง",
    // ...
}
```

### เพิ่มทักษะ
```javascript
skills: [
    {
        category: "ชื่อหมวดหมู่",
        items: ["ทักษะ1", "ทักษะ2", "ทักษะ3"],
        icon: "fas fa-icon-name"
    }
]
```

### เพิ่มประสบการณ์
```javascript
experience: [
    {
        company: "ชื่อบริษัท",
        position: "ตำแหน่ง",
        period: "ช่วงเวลา",
        description: ["หน้าที่1", "หน้าที่2"],
        technologies: ["เทคโนโลยี1", "เทคโนโลยี2"]
    }
]
```

### เพิ่มโปรเจกต์
```javascript
projects: [
    {
        name: "ชื่อโปรเจกต์",
        description: "คำอธิบาย",
        image: "path/to/image.jpg",
        technologies: ["Tech1", "Tech2"],
        githubUrl: "https://github.com/...",
        liveUrl: "https://project-demo.com",
        featured: true // โปรเจกต์เด่น
    }
]
```

## การเชื่อมต่อฟอร์มติดต่อ

สำหรับฟอร์มติดต่อ คุณสามารถใช้บริการต่างๆ เช่น:

### 1. Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 2. Getform
```html
<form action="https://getform.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

## การ Deploy

### GitHub Pages
1. อัพโหลดไฟล์ไปยัง GitHub Repository
2. ไปที่ Settings > Pages
3. เลือก Source เป็น "Deploy from a branch"
4. เลือก branch main

### Netlify
1. ลากไฟล์ไปที่ [netlify.com](https://netlify.com)
2. หรือเชื่อมต่อกับ Git Repository

### Vercel
1. เชื่อมต่อกับ GitHub Repository
2. Deploy อัตโนมัติ

## การปรับแต่งธีม

### เปลี่ยนสี Primary
ในไฟล์ `index.html` ที่ส่วน tailwind.config:
```javascript
colors: {
    primary: '#3B82F6', // เปลี่ยนสีตรงนี้
    secondary: '#64748B',
    accent: '#10B981'
}
```

### เพิ่ม Dark Mode
1. เพิ่ม class `dark:` ใน Tailwind CSS
2. เรียกใช้ฟังก์ชัน `toggleTheme()` ใน script.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **ย่อขนาดรูปภาพ** - ใช้ WebP หรือ AVIF
2. **Lazy Loading** - เพิ่ม `loading="lazy"` ให้ img tag
3. **CDN** - ใช้ CDN สำหรับ libraries
4. **Minify** - ย่อขนาด CSS และ JS ก่อน deploy

## ปัญหาที่อาจพบ

### Tailwind CSS ไม่ทำงาน
- ตรวจสอบ internet connection
- ใช้ Tailwind CLI สำหรับ production

### Font Awesome ไม่แสดง
- ตรวจสอบลิงก์ CDN
- ใช้ self-hosted แทน CDN

### ฟอร์มติดต่อไม่ทำงาน
- ตั้งค่าฟอร์มบริการภายนอก
- เพิ่ม backend API

## การสนับสนุน

หากมีปัญหาหรือข้อสงสัย สามารถ:
- เปิด Issue ใน GitHub
- ส่งอีเมลติดต่อ
- ดูเอกสาร Tailwind CSS

## License

MIT License - ใช้งานได้ฟรีทั้งงานส่วนตัวและเชิงพาณิชย์

---

สร้างด้วย ❤️ โดยใช้ HTML, Tailwind CSS และ JavaScript
