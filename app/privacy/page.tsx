import Link from 'next/link'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. ข้อมูลที่เราเก็บรวบรวม',
      content: [
        'ข้อมูลส่วนบุคคล เช่น ชื่อ-นามสกุล ที่อยู่ เบอร์โทรศัพท์ อีเมล',
        'ข้อมูลสุขภาพและประวัติการรักษาพยาบาล (เฉพาะที่จำเป็นสำหรับการประกัน)',
        'ข้อมูลการใช้งานเว็บไซต์ เช่น IP Address, Browser Type',
        'ข้อมูลทางการเงิน เช่น เลขที่บัญชีธนาคาร (สำหรับการชำระเบี้ยประกัน)'
      ]
    },
    {
      icon: Lock,
      title: '2. วัตถุประสงค์ในการใช้ข้อมูล',
      content: [
        'เพื่อพิจารณาและออกกรมธรรม์ประกันภัย',
        'เพื่อประมวลผลการชำระเบี้ยประกันและการเคลม',
        'เพื่อติดต่อสื่อสารเกี่ยวกับผลิตภัณฑ์และบริการ',
        'เพื่อปรับปรุงคุณภาพการให้บริการ',
        'เพื่อปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง'
      ]
    },
    {
      icon: Shield,
      title: '3. การรักษาความปลอดภัยข้อมูล',
      content: [
        'เข้ารหัสข้อมูลด้วย SSL/TLS',
        'จัดเก็บข้อมูลในระบบที่มีมาตรฐานความปลอดภัยสูง',
        'จำกัดการเข้าถึงข้อมูลเฉพาะผู้ที่มีสิทธิ์เท่านั้น',
        'ตรวจสอบและอัพเดทระบบรักษาความปลอดภัยอย่างสม่ำเสมอ',
        'มีนโยบายการจัดการข้อมูลส่วนบุคคลที่ชัดเจน'
      ]
    },
    {
      icon: Eye,
      title: '4. การเปิดเผยข้อมูล',
      content: [
        'เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม เว้นแต่',
        'ได้รับความยินยอมจากคุณเป็นลายลักษณ์อักษร',
        'เป็นการเปิดเผยตามที่กฎหมายกำหนด',
        'เป็นการเปิดเผยแก่หน่วยงานราชการตามอำนาจหน้าที่',
        'เป็นการเปิดเผยแก่คู่ค้าที่จำเป็นสำหรับการให้บริการ (ภายใต้ข้อตกลงรักษาความลับ)'
      ]
    }
  ]

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="text-xl text-blue-100">
            เราให้ความสำคัญกับความเป็นส่วนตัวและการรักษาความปลอดภัยข้อมูลของคุณ
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">ปรับปรุงล่าสุด:</span> 1 มกราคม 2567
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-8">
            <p className="text-gray-700 leading-relaxed">
              บริษัท SecureLife Insurance จำกัด (&quot;บริษัท&quot; &quot;เรา&quot; หรือ &quot;ของเรา&quot;) 
              ให้ความสำคัญกับความเป็นส่วนตัวของข้อมูลส่วนบุคคลของคุณ 
              นโยบายความเป็นส่วนตัวฉบับนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ 
              และเปิดเผยข้อมูลส่วนบุคคลของคุณ เมื่อคุณใช้บริการของเรา
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mt-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. สิทธิของเจ้าของข้อมูล
              </h2>
              <p className="text-gray-700 mb-4">คุณมีสิทธิตามกฎหมายในการ:</p>
              <ul className="space-y-2 ml-6 text-gray-700">
                <li>• เข้าถึงและขอสำเนาข้อมูลส่วนบุคคลของคุณ</li>
                <li>• ขอแก้ไขข้อมูลส่วนบุคคลที่ไม่ถูกต้อง</li>
                <li>• ขอลบข้อมูลส่วนบุคคล (ภายใต้เงื่อนไขที่กฎหมายกำหนด)</li>
                <li>• ขอระงับการใช้ข้อมูลส่วนบุคคล</li>
                <li>• คัดค้านการประมวลผลข้อมูล</li>
                <li>• ขอให้โอนย้ายข้อมูล</li>
                <li>• ถอนความยินยอมได้ทุกเมื่อ</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                เว็บไซต์ของเราใช้ Cookies เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ 
                Cookies คือไฟล์ข้อความขนาดเล็กที่เก็บไว้ในอุปกรณ์ของคุณ 
                คุณสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธ Cookies ได้ แต่อาจส่งผลต่อการใช้งานบางส่วนของเว็บไซต์
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. การเปลี่ยนแปลงนโยบาย
              </h2>
              <p className="text-gray-700 leading-relaxed">
                เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว 
                การเปลี่ยนแปลงใดๆ จะมีผลทันทีที่เราประกาศบนเว็บไซต์ 
                เราขอแนะนำให้คุณตรวจสอบนโยบายนี้เป็นประจำ
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. ติดต่อเรา
              </h2>
              <p className="text-gray-700 mb-4">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้หรือต้องการใช้สิทธิของคุณ 
                กรุณาติดต่อเราที่:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-gray-700">
                <p><strong>บริษัท SecureLife Insurance จำกัด</strong></p>
                <p>ที่อยู่: 123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</p>
                <p>อีเมล: privacy@securelife.co.th</p>
                <p>โทรศัพท์: 02-123-4567</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="btn-primary inline-block"
            >
              กลับสู่หน้าแรก
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


