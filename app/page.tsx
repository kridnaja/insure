import Link from 'next/link'
import { Shield, Heart, Car, Briefcase, CheckCircle, TrendingUp, Users, Award, Clock, Phone } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'คุ้มครองสูงสุด',
      description: 'ความคุ้มครองที่ครบถ้วน เหมาะสมกับทุกไลฟ์สไตล์'
    },
    {
      icon: TrendingUp,
      title: 'ราคาที่เหมาะสม',
      description: 'เบี้ยประกันที่คุ้มค่า พร้อมผลตอบแทนที่คุ้มค่า'
    },
    {
      icon: Users,
      title: 'ที่ปรึกษาผู้เชี่ยวชาญ',
      description: 'ทีมงานมืออาชีพพร้อมให้คำปรึกษา 24/7'
    },
    {
      icon: Award,
      title: 'ได้รับมาตรฐานสากล',
      description: 'ได้รับการรับรองจาก คปภ. และสมาคมประกันชีวิตไทย'
    }
  ]

  const insuranceTypes = [
    {
      icon: Heart,
      title: 'ประกันชีวิต',
      description: 'คุ้มครองชีวิตและครอบครัว พร้อมสร้างหลักประกันการเงินในอนาคต',
      color: 'bg-red-50 text-red-600',
      href: '/packages#life'
    },
    {
      icon: Shield,
      title: 'ประกันสุขภาพ',
      description: 'คุ้มครองค่ารักษาพยาบาล ค่าห้อง และค่าใช้จ่ายต่างๆ ในโรงพยาบาล',
      color: 'bg-green-50 text-green-600',
      href: '/packages#health'
    },
    {
      icon: Briefcase,
      title: 'ประกันอุบัติเหตุ',
      description: 'คุ้มครองอุบัติเหตุ 24 ชั่วโมง ทั้งในและต่างประเทศ',
      color: 'bg-blue-50 text-blue-600',
      href: '/packages#accident'
    },
    {
      icon: Car,
      title: 'ประกันรถยนต์',
      description: 'คุ้มครองรถยนต์ ทั้งประเภท 1, 2, 3 และพรบ. ครบครัน',
      color: 'bg-purple-50 text-purple-600',
      href: '/packages#car'
    }
  ]

  const stats = [
    { value: '50,000+', label: 'ลูกค้าที่ไว้วางใจ' },
    { value: '15+', label: 'ปีแห่งประสบการณ์' },
    { value: '98%', label: 'ความพึงพอใจลูกค้า' },
    { value: '24/7', label: 'บริการตลอดเวลา' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ประกันภัยที่คุณไว้วางใจ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              คุ้มครองชีวิตและทรัพย์สินของคุณอย่างครบวงจร
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-50">
              เราเข้าใจว่าทุกชีวิตมีค่า พร้อมให้บริการประกันภัยที่เหมาะสมกับทุกคน
              ด้วยเบี้ยประกันที่คุ้มค่าและความคุ้มครองที่ครบถ้วน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                คำนวณเบี้ยประกันฟรี
              </Link>
              <Link href="/packages" className="btn-secondary border-white text-white hover:bg-white/10">
                ดูแพ็คเกจทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md -mt-8 relative z-10 mx-4 md:mx-8 lg:mx-16 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">ทำไมต้องเลือกเรา</h2>
            <p className="section-subtitle">
              เหตุผลที่คุณควรเลือกใช้บริการประกันภัยกับเรา
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card text-center hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">แพ็คเกจประกันของเรา</h2>
            <p className="section-subtitle">
              เลือกแพ็คเกจที่เหมาะสมกับคุณและครอบครัว
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Link 
                  key={index} 
                  href={type.href}
                  className="card hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`${type.color} p-4 rounded-full group-hover:scale-110 transition-transform`}>
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-center">{type.description}</p>
                  <div className="mt-4 text-center">
                    <span className="text-primary-600 font-semibold group-hover:underline">
                      ดูรายละเอียด →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                ประโยชน์ที่คุณจะได้รับ
              </h2>
              <div className="space-y-4">
                {[
                  'รับความคุ้มครองตั้งแต่วันแรกที่สมัคร',
                  'เบี้ยประกันคงที่ตลอดสัญญา',
                  'สามารถต่ออายุได้ตลอดชีพ',
                  'ไม่มีการหักเงินสดคืน',
                  'รับเงินปันผลประจำปี (ตามผลการดำเนินงาน)',
                  'สามารถกู้เงินจากกรมธรรม์ได้'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-white p-8">
              <div className="text-center mb-6">
                <Clock className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  รับใบเสนอราคาภายใน 5 นาที
                </h3>
                <p className="text-gray-600">
                  กรอกข้อมูลง่ายๆ รับใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
                </p>
              </div>
              <Link href="/quote" className="btn-primary w-full text-center block">
                เริ่มคำนวณเบี้ยประกัน
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมที่จะเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            ปกป้องตัวคุณและคนที่คุณรักด้วยประกันภัยที่เหมาะสม
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              รับใบเสนอราคาฟรี
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary border-white text-white hover:bg-white/10 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>ติดต่อเรา</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


