import Link from 'next/link'
import { Heart, Shield, Briefcase, Car, CheckCircle, ArrowRight } from 'lucide-react'

export default function PackagesPage() {
  const packages = {
    life: [
      {
        name: 'แพ็คเกจเริ่มต้น',
        price: '2,500',
        coverage: '1,000,000',
        features: [
          'คุ้มครองการเสียชีวิต 1 ล้านบาท',
          'ผลประโยชน์กรณีทุพพลภาพถาวร',
          'เงินปันผลประจำปี',
          'สามารถต่ออายุได้ตลอดชีพ'
        ],
        popular: false
      },
      {
        name: 'แพ็คเกจแนะนำ',
        price: '4,800',
        coverage: '3,000,000',
        features: [
          'คุ้มครองการเสียชีวิต 3 ล้านบาท',
          'ผลประโยชน์กรณีทุพพลภาพถาวร',
          'เงินปันผลประจำปี',
          'สามารถต่ออายุได้ตลอดชีพ',
          'สามารถกู้เงินจากกรมธรรม์',
          'คุ้มครองโรคร้ายแรง 33 โรค'
        ],
        popular: true
      },
      {
        name: 'แพ็คเกจพรีเมียม',
        price: '8,500',
        coverage: '5,000,000',
        features: [
          'คุ้มครองการเสียชีวิต 5 ล้านบาท',
          'ผลประโยชน์กรณีทุพพลภาพถาวร',
          'เงินปันผลประจำปีสูงสุด',
          'สามารถต่ออายุได้ตลอดชีพ',
          'สามารถกู้เงินจากกรมธรรม์',
          'คุ้มครองโรคร้ายแรง 50 โรค',
          'เบี้ยประกันยืดหยุ่น'
        ],
        popular: false
      }
    ],
    health: [
      {
        name: 'แพ็คเกจพื้นฐาน',
        price: '3,200',
        coverage: '500,000',
        features: [
          'ค่ารักษาพยาบาล 500,000 บาท/ปี',
          'ค่าห้องพิเศษ 1,500 บาท/วัน',
          'ผ่าตัดใหญ่-เล็ก',
          'ตรวจสุขภาพประจำปี'
        ],
        popular: false
      },
      {
        name: 'แพ็คเกจครอบครัว',
        price: '5,900',
        coverage: '1,000,000',
        features: [
          'ค่ารักษาพยาบาล 1 ล้านบาท/ปี',
          'ค่าห้องพิเศษ 3,000 บาท/วัน',
          'ผ่าตัดใหญ่-เล็ก',
          'ตรวจสุขภาพประจำปี',
          'ทันตกรรม',
          'ค่ายา-เวชภัณฑ์',
          'คุ้มครองนอกโรงพยาบาล'
        ],
        popular: true
      },
      {
        name: 'แพ็คเกจพรีเมียม',
        price: '12,500',
        coverage: '3,000,000',
        features: [
          'ค่ารักษาพยาบาล 3 ล้านบาท/ปี',
          'ค่าห้องพิเศษ 5,000 บาท/วัน',
          'ผ่าตัดใหญ่-เล็ก ไม่จำกัดจำนวน',
          'ตรวจสุขภาพประจำปีครบวงจร',
          'ทันตกรรม',
          'ค่ายา-เวชภัณฑ์',
          'คุ้มครองต่างประเทศ',
          'บริการรถพยาบาล'
        ],
        popular: false
      }
    ],
    accident: [
      {
        name: 'แพ็คเกจเบสิค',
        price: '1,500',
        coverage: '500,000',
        features: [
          'คุ้มครองอุบัติเหตุ 500,000 บาท',
          'ค่ารักษาพยาบาล 50,000 บาท',
          'ทุพพลภาพถาวร',
          'คุ้มครอง 24 ชั่วโมง'
        ],
        popular: false
      },
      {
        name: 'แพ็คเกจมาตรฐาน',
        price: '2,800',
        coverage: '1,000,000',
        features: [
          'คุ้มครองอุบัติเหตุ 1 ล้านบาท',
          'ค่ารักษาพยาบาล 100,000 บาท',
          'ทุพพลภาพถาวร',
          'คุ้มครอง 24 ชั่วโมง',
          'ค่าชดเชยรายวัน',
          'เบี้ยเลี้ยงในโรงพยาบาล'
        ],
        popular: true
      },
      {
        name: 'แพ็คเกจสูงสุด',
        price: '4,500',
        coverage: '2,000,000',
        features: [
          'คุ้มครองอุบัติเหตุ 2 ล้านบาท',
          'ค่ารักษาพยาบาล 200,000 บาท',
          'ทุพพลภาพถาวร',
          'คุ้มครอง 24 ชั่วโมง ทั่วโลก',
          'ค่าชดเชยรายวัน',
          'เบี้ยเลี้ยงในโรงพยาบาล',
          'ค่าใช้จ่ายเคลื่อนย้าย'
        ],
        popular: false
      }
    ],
    car: [
      {
        name: 'ประกันภาคสมัครใจ ชั้น 1',
        price: '15,000',
        coverage: '500,000',
        features: [
          'คุ้มครองรถยนต์เต็มมูลค่า',
          'ความเสียหายส่วนแรก',
          'ทุกสาเหตุและทุกกรณี',
          'รับซ่อมห้างศูนย์/อู่',
          'คุ้มครองบุคคลภายนอก',
          'รถยนต์เสียขับไม่ได้คุ้มครอง'
        ],
        popular: true
      },
      {
        name: 'ประกันภาคสมัครใจ ชั้น 2+',
        price: '8,500',
        coverage: '300,000',
        features: [
          'คุ้มครองรถยนต์บางส่วน',
          'เฉพาะอุบัติเหตุสาเหตุคู่กรณี',
          'รับซ่อมอู่',
          'คุ้มครองบุคคลภายนอก',
          'ไฟไหม้ รถหาย'
        ],
        popular: false
      },
      {
        name: 'ประกันภาคสมัครใจ ชั้น 3+',
        price: '4,200',
        coverage: '200,000',
        features: [
          'คุ้มครองบุคคลภายนอก',
          'ไฟไหม้ รถหาย',
          'น้ำท่วม',
          'เบี้ยประกันถูกที่สุด'
        ],
        popular: false
      }
    ]
  }

  const categories = [
    { id: 'life', icon: Heart, title: 'ประกันชีวิต', color: 'text-red-600', bgColor: 'bg-red-50' },
    { id: 'health', icon: Shield, title: 'ประกันสุขภาพ', color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'accident', icon: Briefcase, title: 'ประกันอุบัติเหตุ', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'car', icon: Car, title: 'ประกันรถยนต์', color: 'text-purple-600', bgColor: 'bg-purple-50' }
  ]

  return (
    <div className="pt-16 bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            แพ็คเกจประกันทั้งหมด
          </h1>
          <p className="text-xl text-blue-100">
            เลือกแพ็คเกจที่เหมาะสมกับคุณ ราคาโปร่งใส คุ้มครองครบวงจร
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${category.bgColor} ${category.color} whitespace-nowrap hover:shadow-md transition-all`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{category.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages Sections */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className={`${category.bgColor} p-4 rounded-full`}>
                  <category.icon className={`h-10 w-10 ${category.color}`} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600">เลือกแพ็คเกจที่เหมาะสมกับความต้องการของคุณ</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages[category.id as keyof typeof packages].map((pkg, index) => (
                <div
                  key={index}
                  className={`card relative ${
                    pkg.popular ? 'ring-2 ring-primary-600 shadow-xl scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        แนะนำ
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="flex justify-center items-baseline mb-2">
                      <span className="text-4xl font-bold text-primary-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 ml-2">บาท/ปี</span>
                    </div>
                    <p className="text-gray-600">
                      ความคุ้มครอง: {parseInt(pkg.coverage).toLocaleString()} บาท
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/quote"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-primary-600 hover:bg-gray-200'
                    }`}
                  >
                    เลือกแพ็คเกจนี้
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ไม่แน่ใจว่าแพ็คเกจไหนเหมาะกับคุณ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            ปรึกษากับที่ปรึกษาของเราฟรี หรือลองคำนวณเบี้ยประกันที่เหมาะสมกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center space-x-2">
              <span>คำนวณเบี้ยประกัน</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              ติดต่อที่ปรึกษา
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


