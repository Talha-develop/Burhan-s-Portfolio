import React from 'react'
import { Mail, Phone, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-gray-400 py-20 border-t-2 border-slate-800">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">BA</span>
              </div>
              <h4 className="text-white font-bold text-3xl">Burhan Awais</h4>
            </div>
            <p className="text-gray-400 leading-relaxed text-xl">
              Professional Forex Trader & Market Analyst
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-10 text-2xl">Services</h4>
            <ul className="space-y-5">
              {[
                'Forex Trading',
                'Account Management',
                'Trading Mentorship',
                'Crypto Consulting',
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <a
                    href="#experience"
                    className="hover:text-cyan-400 transition text-xl"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white font-bold mb-10 text-2xl">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <a
                  href="mailto:burhan.fxtrader@gmail.com"
                  className="hover:text-cyan-400 transition text-xl break-all"
                >
                  burhan.fxtrader@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-cyan-400" />
                <a
                  href="tel:03244857000"
                  className="hover:text-cyan-400 transition text-xl"
                >
                  03244857000
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t-2 border-slate-800 pt-12 text-center">
          <p className="text-gray-500 text-xl">
            © {currentYear} Burhan Awais. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
