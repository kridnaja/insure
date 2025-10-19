import { Shield, Target, Award, Users, TrendingUp, Heart, CheckCircle, Globe } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    { year: '2008', title: 'ก่อตั้งบริษัท', desc: 'เริ่มต้นธุรกิจประกันชีวิต' },
    { year: '2012', title: 'ขยายสาขา', desc: 'เปิดสาขาทั่วประเทศ 20 แห่ง' },
    { year: '2016', title: 'รางวัลแห่งความเชื่อมั่น', desc: 'ได้รับรางวัลบริษัทประกันยอดเยี่ยม' },
    { year: '2020', title: 'Digital Transformation', desc: 'เปิดตัวบริการออนไลน์ครบวงจร' },
    { year: '2023', title: '50,000+ ลูกค้า', desc: 'มีลูกค้าที่ไว้วางใจมากกว่า 50,000 ราย' }
  ]

  const values = [
    {
      icon: Shield,
      title: 'ความน่าเชื่อถือ',
      description: 'เราให้ความสำคัญกับความปลอดภัยและมั่นคงทางการเงินของลูกค้า พร้อมให้บริการอย่างโปร่งใสและรับผิดชอบ'
    },
    {
      icon: Heart,
      title: 'ใส่ใจลูกค้า',
      description: 'เราเข้าใจว่าทุกชีวิตมีค่า เราจึงมุ่งมั่นให้บริการด้วยความจริงใจและใส่ใจในทุกรายละเอียด'
    },
    {
      icon: Award,
      title: 'มาตรฐานสูง',
      description: 'เรายึดมั่นในมาตรฐานสากลและได้รับการรับรองจากหน่วยงานที่เกี่ยวข้อง'
    },
    {
      icon: TrendingUp,
      title: 'นวัตกรรม',
      description: 'เราพัฒนาผลิตภัณฑ์และบริการอย่างต่อเนื่อง เพื่อตอบสนองความต้องการที่เปลี่ยนแปลง'
    }
  ]

  const team = [
    {
      name: 'ดร.สมชาย ใจดี',
      position: 'ประธานเจ้าหน้าที่บริหาร',
      experience: '25 ปี',
      expertise: 'การบริหารและกลยุทธ์องค์กร'
    },
    {
      name: 'คุณสมหญิง รักดี',
      position: 'ผู้อำนวยการฝ่ายการตลาด',
      experience: '18 ปี',
      expertise: 'การตลาดและพัฒนาผลิตภัณฑ์'
    },
    {
      name: 'คุณประสิทธิ์ ชำนาญการ',
      position: 'ผู้อำนวยการฝ่ายการเงิน',
      experience: '20 ปี',
      expertise: 'การบริหารการเงินและการลงทุน'
    },
    {
      name: 'คุณสุวรรณา เอื้ออาทร',
      position: 'ผู้อำนวยการฝ่ายบริการลูกค้า',
      experience: '15 ปี',
      expertise: 'การบริการและประสบการณ์ลูกค้า'
    }
  ]

  const achievements = [
    { icon: Users, stat: '50,000+', label: 'ลูกค้าที่ไว้วางใจ' },
    { icon: Award, stat: '15+', label: 'รางวัลแห่งความเชื่อมั่น' },
    { icon: Globe, stat: '50+', label: 'สาขาทั่วประเทศ' },
    { icon: TrendingUp, stat: '98%', label: 'ความพึงพอใจลูกค้า' }
  ]

  return (
    <div className="pt-16 bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-blue-100">
            ผู้นำด้านการให้บริการประกันภัยที่คุณไว้วางใจมากว่า 15 ปี
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">พันธกิจ</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                เราทุ่มเทเพื่อมาให้บริการประกันภัยที่มีคุณภาพและเข้าถึงได้ง่าย 
                โดยมุ่งเน้นการสร้างความมั่นคงทางการเงินและความคุ้มครองที่ครบวงจร
                ให้กับลูกค้าทุกคนอย่างเท่าเทียม ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">วิสัยทัศน์</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                เป็นบริษัทประกันชีวิตชั้นนำที่ได้รับความไว้วางใจสูงสุดในภูมิภาคเอเชีย 
                โดยการนำเสนอผลิตภัณฑ์ที่หลากหลาย บริการที่เป็นเลิศ 
                และนวัตกรรมที่ตอบโจทย์ความต้องการของลูกค้าในยุคดิจิทัล
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ค่านิยมหลักของเรา
            </h2>
            <p className="text-gray-600">
              หลักการที่เราดำเนินธุรกิจและให้บริการลูกค้า
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card bg-white text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              เส้นทางแห่งความสำเร็จ
            </h2>
            <p className="text-gray-600">
              การเติบโตและพัฒนาของเราตลอด 15 ปี
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary-600 rounded-full w-12 h-12 flex items-center justify-center z-10 border-4 border-white shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 px-4">
                    <div className={`card ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ความสำเร็จของเรา
            </h2>
            <p className="text-blue-100">
              ตัวเลขที่สะท้อนความมุ่งมั่นและความเชี่ยวชาญ
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.stat}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทีมผู้บริหาร
            </h2>
            <p className="text-gray-600">
              ผู้นำที่มีประสบการณ์และความเชี่ยวชาญในอุตสาหกรรมประกันภัย
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.position}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>ประสบการณ์: {member.experience}</p>
                  <p>{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              การรับรองและมาตรฐาน
            </h2>
            <p className="text-gray-600">
              เราได้รับการรับรองจากหน่วยงานชั้นนำ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'สำนักงาน คปภ.',
                desc: 'ได้รับใบอนุญาตประกอบธุรกิจประกันชีวิต'
              },
              {
                title: 'สมาคมประกันชีวิตไทย',
                desc: 'สมาชิกสมาคมประกันชีวิตไทย'
              },
              {
                title: 'ISO 9001:2015',
                desc: 'มาตรฐานระบบการจัดการคุณภาพ'
              }
            ].map((cert, index) => (
              <div key={index} className="card text-center">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <Award className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


