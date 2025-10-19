# 🏥 SecureLife Insurance - เว็บไซต์ขายประกันภัย

เว็บไซต์ขายประกันภัยที่สมจริง พัฒนาด้วย Next.js 14 พร้อม UI ที่ทันสมัยและ Responsive

## ✨ ฟีเจอร์หลัก

- 🏠 **หน้าแรก (Landing Page)** - Hero Section พร้อมแสดงข้อมูลเด่นและสถิติ
- 📦 **หน้าแพ็คเกจประกัน** - แสดงแพ็คเกจประกันทั้ง 4 ประเภท
  - ประกันชีวิต
  - ประกันสุขภาพ
  - ประกันอุบัติเหตุ
  - ประกันรถยนต์
- 🧮 **คำนวณเบี้ยประกัน** - ฟอร์มคำนวณเบี้ยประกันอัตโนมัติตามข้อมูลที่กรอก
- 📖 **เกี่ยวกับเรา** - ประวัติบริษัท วิสัยทัศน์ พันธกิจ และทีมผู้บริหาร
- 📞 **ติดต่อเรา** - ฟอร์มติดต่อ แผนที่ และข้อมูลสาขา
- 📱 **Responsive Design** - รองรับทุกอุปกรณ์ (Desktop, Tablet, Mobile)

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 14** - React Framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS Framework
- **Lucide React** - Beautiful Icon Library

## 📋 ข้อกำหนดเบื้องต้น

- Node.js 18+ 
- npm หรือ yarn

## 🚀 การติดตั้งและรันโปรเจค

### 1. Clone โปรเจค
```bash
git clone <repository-url>
cd insurance-website
```

### 2. ติดตั้ง Dependencies
```bash
npm install
# หรือ
yarn install
```

### 3. รันโปรเจคในโหมด Development
```bash
npm run dev
# หรือ
yarn dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### 4. Build สำหรับ Production
```bash
npm run build
npm start
# หรือ
yarn build
yarn start
```

## 📂 โครงสร้างโปรเจค

```
insurance-website/
├── app/                    # Next.js 14 App Router
│   ├── about/             # หน้าเกี่ยวกับเรา
│   ├── contact/           # หน้าติดต่อเรา
│   ├── packages/          # หน้าแพ็คเกจประกัน
│   ├── quote/             # หน้าคำนวณเบี้ยประกัน
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # หน้าแรก
│   └── globals.css        # Global Styles
├── components/            # React Components
│   ├── Navigation.tsx     # Navigation Bar
│   └── Footer.tsx         # Footer
├── public/                # Static Files
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind Configuration
└── tsconfig.json          # TypeScript Configuration
```

## 🎨 ฟีเจอร์เด่น

### หน้าคำนวณเบี้ยประกัน
- คำนวณเบี้ยประกันตามปัจจัยต่างๆ:
  - อายุ
  - เพศ
  - อาชีพ
  - สุขภาพ
  - การสูบบุหรี่
  - ทุนประกันที่ต้องการ
- แสดงผลเบี้ยประกันรายปีและรายเดือน
- UI/UX ที่ใช้งานง่าย

### การ์ดแพ็คเกจประกัน
- แสดงรายละเอียดแต่ละแพ็คเกจอย่างชัดเจน
- เน้นแพ็คเกจแนะนำ (Popular)
- ราคาโปร่งใส
- ฟีเจอร์ครบถ้วน

### Responsive Design
- Mobile-first approach
- Navigation แบบ Hamburger Menu บนมือถือ
- Grid Layout ที่ปรับตามขนาดหน้าจอ
- Typography และ Spacing ที่เหมาะสม

## 🎯 การปรับแต่ง

### เปลี่ยนสีธีม
แก้ไขไฟล์ `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // ปรับสีตามต้องการ
  }
}
```

### เปลี่ยนข้อมูลบริษัท
- ข้อมูลติดต่อ: `components/Footer.tsx`
- ข้อมูลทีมงาน: `app/about/page.tsx`
- ข้อมูลสาขา: `app/contact/page.tsx`

## 📝 To-Do / Features ที่สามารถเพิ่มเติม

- [ ] เชื่อมต่อ Backend API
- [ ] ระบบ Authentication
- [ ] ระบบจัดการกรมธรรม์
- [ ] Payment Gateway
- [ ] Dashboard สำหรับลูกค้า
- [ ] ระบบแจ้งเตือน
- [ ] Live Chat Support
- [ ] Multi-language Support

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Developer

พัฒนาโดย AI Assistant สำหรับการเรียนรู้และทดสอบ

---

**หมายเหตุ:** โปรเจคนี้เป็นเดโม่สำหรับการเรียนรู้เท่านั้น ไม่ได้เชื่อมต่อกับระบบการเงินจริง


