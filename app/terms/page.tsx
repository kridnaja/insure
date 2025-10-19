import Link from 'next/link'
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react'

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. การยอมรับข้อกำหนด',
      content: 'การเข้าใช้งานหรือสมัครใช้บริการของเว็บไซต์นี้ ถือว่าคุณได้อ่านและยอมรับข้อกำหนดและเงื่อนไขทั้งหมดแล้ว หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาหยุดการใช้งานเว็บไซต์ทันที'
    },
    {
      icon: CheckCircle,
      title: '2. การให้บริการ',
      content: 'SecureLife Insurance ให้บริการผ่านเว็บไซต์เพื่อ: (ก) ให้ข้อมูลเกี่ยวกับผลิตภัณฑ์ประกันภัย (ข) คำนวณเบี้ยประกัน (ค) รับสมัครกรมธรรม์ประกันภัย (ง) ให้บริการหลังการขาย เราขอสงวนสิทธิ์ในการเปลี่ยนแปลง ระงับ หรือยกเลิกการให้บริการใดๆ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า'
    },
    {
      icon: Scale,
      title: '3. การสมัครและการชำระเงิน',
      content: 'การสมัครกรมธรรม์ประกันภัยจะสมบูรณ์เมื่อได้รับการอนุมัติจากบริษัท และได้รับชำระเบี้ยประกันครั้งแรกเรียบร้อยแล้ว คุณต้องให้ข้อมูลที่ถูกต้องและครบถ้วน การให้ข้อมูลเท็จอาจส่งผลให้กรมธรรม์เป็นโมฆะ การชำระเบี้ยประกันต้องชำระภายในกำหนด มิฉะนั้นความคุ้มครองอาจสิ้นสุดลง'
    },
    {
      icon: AlertTriangle,
      title: '4. การยกเลิกและการคืนเงิน',
      content: 'คุณมีสิทธิ์ยกเลิกกรมธรรม์ภายใน 15 วันนับจากวันที่ได้รับกรมธรรม์ (Free Look Period) โดยจะได้รับเงินคืนเต็มจำนวน การยกเลิกหลังจากนั้นจะเป็นไปตามเงื่อนไขที่ระบุในกรมธรรม์ และอาจมีค่าใช้จ่ายในการยกเลิก'
    }
  ]

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ข้อกำหนดและเงื่อนไข
          </h1>
          <p className="text-xl text-blue-100">
            ข้อตกลงการใช้บริการระหว่างคุณและ SecureLife Insurance
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
              ยินดีต้อนรับสู่ SecureLife Insurance (&quot;เรา&quot; &quot;ของเรา&quot; หรือ &quot;บริษัท&quot;) 
              ข้อกำหนดและเงื่อนไขนี้ใช้บังคับกับการเข้าใช้งานเว็บไซต์ของเรา 
              และการสมัครใช้บริการประกันภัยทุกประเภท กรุณาอ่านข้อกำหนดอย่างละเอียดก่อนใช้บริการ
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
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Terms */}
          <div className="space-y-8 mt-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. ความรับผิดชอบของผู้ใช้
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">คุณตกลงที่จะ:</p>
                <ul className="ml-6 space-y-2">
                  <li>• ให้ข้อมูลที่ถูกต้องและครบถ้วน</li>
                  <li>• รักษาความลับของรหัสผ่านและข้อมูลบัญชี</li>
                  <li>• แจ้งให้เราทราบทันทีหากพบการใช้งานที่ผิดปกติ</li>
                  <li>• ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง</li>
                  <li>• ชำระเบี้ยประกันตามกำหนดเวลา</li>
                </ul>
                <p className="font-semibold mt-4">คุณต้องไม่:</p>
                <ul className="ml-6 space-y-2">
                  <li>• ใช้บริการเพื่อวัตถุประสงค์ที่ผิดกฎหมาย</li>
                  <li>• แก้ไขหรือทำลายข้อมูลในระบบ</li>
                  <li>• ส่งข้อมูลที่เป็นอันตรายหรือไวรัส</li>
                  <li>• ละเมิดทรัพย์สินทางปัญญาของบริษัท</li>
                  <li>• แอบอ้างเป็นบุคคลอื่นหรือให้ข้อมูลเท็จ</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. ความรับผิดจำกัด
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  บริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจาก:
                </p>
                <ul className="ml-6 space-y-2">
                  <li>• การให้ข้อมูลที่ไม่ถูกต้องจากผู้ใช้</li>
                  <li>• การที่ระบบไม่สามารถใช้งานได้ชั่วคราว</li>
                  <li>• การกระทำของบุคคลภายนอก</li>
                  <li>• เหตุสุดวิสัย เช่น ภัยธรรมชาติ สงคราม</li>
                  <li>• ข้อผิดพลาดในการส่งข้อมูลผ่านอินเทอร์เน็ต</li>
                </ul>
                <p className="mt-4">
                  บริษัทไม่รับประกันว่าเว็บไซต์จะทำงานได้อย่างไม่หยุดชะงักหรือไม่มีข้อผิดพลาด 
                  แต่เราจะพยายามอย่างเต็มที่เพื่อให้บริการที่ดีที่สุด
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. ทรัพย์สินทางปัญญา
              </h2>
              <p className="text-gray-700 leading-relaxed">
                เนื้อหาทั้งหมดในเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ กราฟิก โลโก้ ไอคอน 
                รูปภาพ คลิปเสียง คลิปวิดีโอ และซอฟต์แวร์ เป็นทรัพย์สินของบริษัท 
                หรือผู้อนุญาตให้ใช้สิทธิ และได้รับความคุ้มครองตามกฎหมายทรัพย์สินทางปัญญา 
                ห้ามทำซ้ำ แจกจ่าย ดัดแปลง หรือใช้เพื่อการพาณิชย์โดยไม่ได้รับอนุญาต
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. การเปลี่ยนแปลงข้อกำหนด
              </h2>
              <p className="text-gray-700 leading-relaxed">
                บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดและเงื่อนไขนี้ได้ทุกเมื่อ 
                โดยจะประกาศการเปลี่ยนแปลงบนเว็บไซต์ 
                การใช้บริการต่อไปหลังจากมีการเปลี่ยนแปลง ถือว่าคุณยอมรับข้อกำหนดใหม่
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. กฎหมายที่ใช้บังคับ
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ข้อกำหนดและเงื่อนไขนี้อยู่ภายใต้บังคับของกฎหมายไทย 
                และข้อพิพาทใดๆ ที่เกิดขึ้นจะอยู่ในเขตอำนาจของศาลไทยเท่านั้น
              </p>
            </div>

            <div className="card bg-blue-50 border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. ติดต่อเรา
              </h2>
              <p className="text-gray-700 mb-4">
                หากคุณมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไขนี้ กรุณาติดต่อเราที่:
              </p>
              <div className="bg-white p-4 rounded-lg space-y-2 text-gray-700">
                <p><strong>บริษัท SecureLife Insurance จำกัด</strong></p>
                <p>ที่อยู่: 123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</p>
                <p>อีเมล: legal@securelife.co.th</p>
                <p>โทรศัพท์: 02-123-4567</p>
              </div>
            </div>
          </div>

          {/* Agreement Box */}
          <div className="mt-12 card bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  การยอมรับข้อกำหนด
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  การใช้บริการของเราถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดและเงื่อนไขทั้งหมดแล้ว 
                  หากคุณไม่เห็นด้วย กรุณาอย่าใช้บริการของเรา
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/" className="btn-primary inline-block">
              กลับสู่หน้าแรก
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


