import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">SecureLife</span>
            </div>
            <p className="text-sm">
              บริษัทประกันชีวิตชั้นนำที่ให้บริการประกันภัยครบวงจร พร้อมดูแลคุณและครอบครัวอย่างมั่นใจ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">เมนูหลัก</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary-400 transition-colors">
                  แพ็คเกจประกัน
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary-400 transition-colors">
                  คำนวณเบี้ยประกัน
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">ประเภทประกัน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages#life" className="hover:text-primary-400 transition-colors">
                  ประกันชีวิต
                </Link>
              </li>
              <li>
                <Link href="/packages#health" className="hover:text-primary-400 transition-colors">
                  ประกันสุขภาพ
                </Link>
              </li>
              <li>
                <Link href="/packages#accident" className="hover:text-primary-400 transition-colors">
                  ประกันอุบัติเหตุ
                </Link>
              </li>
              <li>
                <Link href="/packages#car" className="hover:text-primary-400 transition-colors">
                  ประกันรถยนต์
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">02-123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">info@securelife.co.th</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} SecureLife Insurance. สงวนลิขสิทธิ์ทั้งหมด | 
            <Link href="/privacy" className="hover:text-primary-400 ml-2">
              นโยบายความเป็นส่วนตัว
            </Link> | 
            <Link href="/terms" className="hover:text-primary-400 ml-2">
              ข้อกำหนดและเงื่อนไข
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}


