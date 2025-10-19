'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real application, send data to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'ที่อยู่สำนักงาน',
      content: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'โทรศัพท์',
      content: '02-123-4567\n089-123-4567',
      link: 'tel:021234567'
    },
    {
      icon: Mail,
      title: 'อีเมล',
      content: 'info@securelife.co.th\nsupport@securelife.co.th',
      link: 'mailto:info@securelife.co.th'
    },
    {
      icon: Clock,
      title: 'เวลาทำการ',
      content: 'จันทร์ - ศุกร์: 9:00 - 18:00\nเสาร์: 9:00 - 13:00',
      link: null
    }
  ]

  const branches = [
    {
      name: 'สาขากรุงเทพ (สำนักงานใหญ่)',
      address: '123 ถนนสุขุมวิท แขวงคลองเตย',
      phone: '02-123-4567',
      hours: 'จ-ศ 9:00-18:00, ส 9:00-13:00'
    },
    {
      name: 'สาขาเชียงใหม่',
      address: '456 ถนนห้วยแก้ว ต.สุเทพ',
      phone: '053-234-567',
      hours: 'จ-ศ 9:00-18:00'
    },
    {
      name: 'สาขาภูเก็ต',
      address: '789 ถนนราษฎร์อุทิศ ต.ตลาดใหญ่',
      phone: '076-345-678',
      hours: 'จ-ศ 9:00-18:00'
    },
    {
      name: 'สาขาขอนแก่น',
      address: '321 ถนนมิตรภาพ ต.ในเมือง',
      phone: '043-456-789',
      hours: 'จ-ศ 9:00-18:00'
    }
  ]

  const faqs = [
    {
      q: 'ใช้เวลานานแค่ไหนในการอนุมัติกรมธรรม์?',
      a: 'โดยปกติใช้เวลา 3-5 วันทำการ หลังจากส่งเอกสารครบถ้วน'
    },
    {
      q: 'สามารถต่ออายุกรมธรรม์ออนไลน์ได้หรือไม่?',
      a: 'ได้ครับ เราให้บริการต่ออายุผ่านเว็บไซต์และแอปพลิเคชันตลอด 24 ชั่วโมง'
    },
    {
      q: 'มีช่องทางไหนบ้างในการติดต่อฉุกเฉิน?',
      a: 'โทร 1234 ตลอด 24 ชั่วโมง หรือ Line Official: @securelife'
    },
    {
      q: 'สามารถเปลี่ยนแปลงแพ็คเกจได้หรือไม่?',
      a: 'ได้ครับ สามารถปรับเปลี่ยนแพ็คเกจได้ตามเงื่อนไขกรมธรรม์'
    }
  ]

  return (
    <div className="pt-16 bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-blue-100">
            เรายินดีให้บริการและตอบคำถามของคุณตลอด 24 ชั่วโมง
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="card text-center hover:scale-105 transition-transform">
                  <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 text-sm hover:text-primary-600 whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ส่งข้อความถึงเรา
              </h2>
              <p className="text-gray-600 mb-8">
                กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                    <Send className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    ส่งข้อความสำเร็จ!
                  </h3>
                  <p className="text-green-700">
                    ขอบคุณที่ติดต่อเรา เราจะตอบกลับโดยเร็วที่สุด
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="กรอกชื่อ-นามสกุล"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        อีเมล *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        เบอร์โทรศัพท์ *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="089-123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      หัวข้อ *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="quote">สอบถามเบี้ยประกัน</option>
                      <option value="claim">เคลมประกัน</option>
                      <option value="policy">สอบถามกรมธรรม์</option>
                      <option value="complaint">ร้องเรียน</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ข้อความ *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="กรอกข้อความของคุณ..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>ส่งข้อความ</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  แผนที่สำนักงานใหญ่
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-gray-400" />
                </div>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    เปิดใน Google Maps →
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ติดตามเรา
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  ติดตามข่าวสารและโปรโมชั่นพิเศษจากเราได้ที่โซเชียลมีเดีย
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="card bg-red-50 border-2 border-red-200">
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  📞 สายด่วนฉุกเฉิน
                </h3>
                <p className="text-3xl font-bold text-red-600 mb-2">1234</p>
                <p className="text-gray-700 text-sm">
                  บริการตลอด 24 ชั่วโมง สำหรับเคลมเร่งด่วนและให้คำปรึกษา
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              สาขาของเรา
            </h2>
            <p className="text-gray-600">
              มีสาขาให้บริการทั่วประเทศกว่า 50 แห่ง
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-gray-900 mb-3">{branch.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary-600" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 flex-shrink-0 text-primary-600" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary-600" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-gray-600">
              คำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อยที่สุด
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <span className="text-primary-600 mr-2">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-6">
                  <span className="text-primary-600 font-semibold">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


