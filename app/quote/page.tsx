'use client'

import { useState } from 'react'
import { Calculator, CheckCircle, User, Calendar, Briefcase, DollarSign } from 'lucide-react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    insuranceType: 'life',
    name: '',
    age: '',
    gender: 'male',
    coverage: '1000000',
    occupation: 'office',
    smoking: 'no',
    healthCondition: 'good'
  })

  const [quote, setQuote] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateQuote = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Base premium calculation
    let basePremium = 0
    const age = parseInt(formData.age)
    const coverage = parseInt(formData.coverage)
    
    // Calculate based on insurance type
    switch (formData.insuranceType) {
      case 'life':
        basePremium = (coverage / 1000000) * 2500
        break
      case 'health':
        basePremium = (coverage / 500000) * 3200
        break
      case 'accident':
        basePremium = (coverage / 500000) * 1500
        break
      case 'car':
        basePremium = 15000 // Fixed base for car insurance
        break
    }

    // Age factor
    if (age > 40) basePremium *= 1.3
    else if (age > 30) basePremium *= 1.15
    
    // Gender factor
    if (formData.gender === 'female' && formData.insuranceType === 'life') {
      basePremium *= 0.95 // Discount for female
    }

    // Occupation risk factor
    if (formData.occupation === 'high-risk') {
      basePremium *= 1.5
    } else if (formData.occupation === 'medium-risk') {
      basePremium *= 1.2
    }

    // Smoking factor
    if (formData.smoking === 'yes') {
      basePremium *= 1.3
    }

    // Health condition factor
    if (formData.healthCondition === 'fair') {
      basePremium *= 1.15
    } else if (formData.healthCondition === 'poor') {
      basePremium *= 1.4
    }

    setQuote(Math.round(basePremium))
    setShowResult(true)
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="gradient-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            คำนวณเบี้ยประกัน
          </h1>
          <p className="text-xl text-blue-100">
            กรอกข้อมูลเพื่อรับใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ข้อมูลสำหรับคำนวณ</h2>
                
                <form onSubmit={calculateQuote} className="space-y-6">
                  {/* Insurance Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ประเภทประกัน
                    </label>
                    <select
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="life">ประกันชีวิต</option>
                      <option value="health">ประกันสุขภาพ</option>
                      <option value="accident">ประกันอุบัติเหตุ</option>
                      <option value="car">ประกันรถยนต์</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ชื่อ-นามสกุล
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
                    {/* Age */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        อายุ
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="25"
                        min="18"
                        max="80"
                        required
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        เพศ
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="male">ชาย</option>
                        <option value="female">หญิง</option>
                      </select>
                    </div>
                  </div>

                  {/* Coverage Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ทุนประกัน (บาท)
                    </label>
                    <select
                      name="coverage"
                      value={formData.coverage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="500000">500,000 บาท</option>
                      <option value="1000000">1,000,000 บาท</option>
                      <option value="2000000">2,000,000 บาท</option>
                      <option value="3000000">3,000,000 บาท</option>
                      <option value="5000000">5,000,000 บาท</option>
                    </select>
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      อาชีพ
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="office">พนักงานออฟฟิศ / ข้าราชการ</option>
                      <option value="business">เจ้าของธุรกิจ</option>
                      <option value="medium-risk">อาชีพเสี่ยงปานกลาง (เช่น ช่าง, พนักงานขาย)</option>
                      <option value="high-risk">อาชีพเสี่ยงสูง (เช่น ก่อสร้าง, เหมืองแร่)</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Smoking */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        สูบบุหรี่หรือไม่
                      </label>
                      <select
                        name="smoking"
                        value={formData.smoking}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="no">ไม่สูบบุหรี่</option>
                        <option value="yes">สูบบุหรี่</option>
                      </select>
                    </div>

                    {/* Health Condition */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        สุขภาพโดยรวม
                      </label>
                      <select
                        name="healthCondition"
                        value={formData.healthCondition}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="good">ดีมาก</option>
                        <option value="fair">ปานกลาง</option>
                        <option value="poor">มีโรคประจำตัว</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    คำนวณเบี้ยประกัน
                  </button>
                </form>
              </div>
            </div>

            {/* Result Sidebar */}
            <div className="md:col-span-1">
              <div className="card sticky top-24">
                {!showResult ? (
                  <div className="text-center py-8">
                    <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">กรอกข้อมูลเพื่อคำนวณเบี้ยประกัน</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="bg-green-50 rounded-full p-4 inline-block mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      เบี้ยประกันโดยประมาณ
                    </h3>
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary-600 mb-1">
                        {quote?.toLocaleString()}
                      </div>
                      <div className="text-gray-600">บาท/ปี</div>
                      <div className="text-sm text-gray-500 mt-2">
                        หรือ {Math.round((quote || 0) / 12).toLocaleString()} บาท/เดือน
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">สิทธิประโยชน์</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>✓ ทุนประกัน: {parseInt(formData.coverage).toLocaleString()} บาท</p>
                        <p>✓ คุ้มครองตลอดชีพ</p>
                        <p>✓ เงินปันผลประจำปี</p>
                      </div>
                    </div>

                    <button className="btn-primary w-full mb-2">
                      สมัครเลย
                    </button>
                    <button 
                      onClick={() => setShowResult(false)}
                      className="text-sm text-gray-600 hover:text-primary-600"
                    >
                      คำนวณใหม่
                    </button>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    * ราคาเป็นเพียงการประมาณการเบื้องต้น อาจมีการเปลี่ยนแปลงตามเงื่อนไขจริง
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ทำไมต้องเลือกเรา
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: User, title: 'ที่ปรึกษาเฉพาะทาง', desc: 'มืออาชีพพร้อมให้คำปรึกษา' },
              { icon: Calendar, title: 'อนุมัติไว', desc: 'ภายใน 24 ชั่วโมง' },
              { icon: Briefcase, title: 'ผลิตภัณฑ์หลากหลาย', desc: 'ครอบคลุมทุกความต้องการ' },
              { icon: DollarSign, title: 'ราคายุติธรรม', desc: 'เบี้ยประกันที่คุ้มค่า' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


