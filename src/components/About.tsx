import React from 'react'
import { TrendingUp, Users, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function About() {
  const stats = [
    {
      icon: TrendingUp,
      value: '3+',
      label: 'Years Experience',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Traders Mentored',
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      icon: Target,
      value: '5-10%',
      label: 'Monthly Returns',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      icon: Award,
      value: '10x',
      label: 'Account Growth',
      color: 'from-blue-600 to-cyan-700',
    },
  ]

  return (
    <section id="about" className="py-24 md:py-48 lg:py-64 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          {...fadeInUp}
          className="mb-16 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            About Me
          </h2>
          <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8 md:space-y-12 ml-8 md:ml-16 lg:ml-24"
          >
            <p className=" text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Professional forex trader with 3 years of experience helping
              traders achieve consistent profitability through expert market
              analysis and strategic guidance.
            </p>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Specializing in account management and trading mentorship with
              proven results across multiple platforms.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={` bg-gradient-to-br ${stat.color} p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-center `}
                >
                  <Icon className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 text-white mb-6 md:mb-8 lg:mb-10" />
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                    {stat.value}
                  </div>
                  <p className="text-blue-100 text-sm md:text-lg lg:text-xl font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
