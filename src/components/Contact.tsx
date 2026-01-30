import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
}

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'burhan.fxtrader@gmail.com',
      href: 'mailto:burhan.fxtrader@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '03244857000',
      href: 'tel:03244857000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '287-C, Gulshan-e-Ravi, Lahore',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-48 lg:py-64 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 lg:mb-32">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.a
                key={idx}
                href={info.href}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="bg-slate-800 border-2 border-slate-700 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 text-center group hover:border-cyan-500 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2.67rem)] max-w-sm"
              >
                <div className="flex justify-center mb-8 md:mb-10">
                  <div className="p-5 md:p-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Icon className="w-10 md:w-12 h-10 md:h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 md:mb-5">
                  {info.label}
                </h3>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl break-words">
                  {info.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl p-10 md:p-16 lg:p-24 text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 lg:mb-12">
            Ready to Start Trading?
          </h3>
          <p className="text-blue-100 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
            Let's discuss your trading goals and how I can help you achieve
            consistent profitability in the forex markets.
          </p>
          <motion.a
            href="mailto:burhan.fxtrader@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-12 lg:px-16 py-4 md:py-5 lg:py-6 bg-white text-blue-600 text-lg md:text-xl font-bold rounded-xl md:rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl"
          >
            <Send className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7" />
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
