import React from 'react'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
}

export default function Experience() {
  const experiences = [
    {
      title: 'Forex Trader & Mentor',
      company: 'Fiverr',
      duration: 'Present',
      responsibilities: [
        'Trade forex markets using technical and fundamental analysis',
        'Manage trading accounts for clients ensuring capital preservation',
        'Conduct market research on currency pairs, commodities, and indices',
        'Mentor aspiring traders in risk management and trading psychology',
      ],
    },
    {
      title: 'Crypto Expert',
      company: 'Independent Consultant',
      duration: 'Present',
      responsibilities: [
        'Analyze cryptocurrency markets for profitable trading opportunities',
        'Advise clients on investment strategies with altcoins',
        'Build diversified crypto portfolios for long-term growth',
        'Educate clients on crypto fundamentals and market trends',
      ],
    },
    {
      title: 'Trader Account Manager',
      company: 'Upwork / Remote',
      duration: '2022 - Present',
      responsibilities: [
        'Manage trading accounts for retail and institutional investors',
        'Apply advanced day trading and scalping strategies',
        'Utilize technical and fundamental analysis for risk management',
        'Maintain transparent communication through performance reporting',
      ],
    },
    {
      title: 'Sales & Truck Dispatching',
      company: 'SAS Logistics',
      duration: '2021 - 2023',
      responsibilities: [
        'Managed truck dispatching and optimized routes',
        'Closed deals with businesses and drivers',
        'Developed sales strategies to acquire new clients',
        'Increased revenue through effective client relationships',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-48 lg:py-64 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Professional Experience
          </h2>
          <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ x: 12, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 border-l-4 border-l-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 md:mb-10 lg:mb-12 gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
                    <div className=" p-3 md:p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl md:rounded-2xl">
                      <Briefcase className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-blue-300 font-semibold text-lg md:text-xl lg:text-2xl ml-0 md:ml-16 lg:ml-20">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-400">
                  <Calendar className="w-5 md:w-6 h-5 md:h-6" />
                  <span className="text-base md:text-lg font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 md:space-y-5 lg:space-y-6 ml-0 md:ml-16 lg:ml-20">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 md:gap-4 lg:gap-5"
                  >
                    <ChevronRight className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-cyan-400 mt-1 shrink-0" />
                    <span className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                      {resp}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
