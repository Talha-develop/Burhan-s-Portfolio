import React from 'react'
import { TrendingUp, DollarSign, GraduationCap, Bitcoin } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
}

export default function Achievements() {
  const achievements = [
    {
      title: 'Consistent Profitability',
      description:
        'Developed and implemented a high-accuracy trading strategy, achieving a 5-10% monthly return for managed accounts.',
      icon: TrendingUp,
      color: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Account Growth',
      description:
        'Scaled multiple trading accounts from $500 to $5000+ using disciplined risk management strategies.',
      icon: DollarSign,
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      title: 'Mentorship Success',
      description:
        'Trained and guided students in forex trading, with many achieving independent trading success.',
      icon: GraduationCap,
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      title: 'Expert in Digital Assets',
      description:
        'Built strong expertise in cryptocurrency markets with proven track record of advising clients on profitable strategies.',
      icon: Bitcoin,
      color: 'from-purple-600 to-purple-700',
    },
  ]

  return (
    <section className="py-24 md:py-48 lg:py-64 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Key Achievements
          </h2>
          <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 justify-items-center">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className={`bg-gradient-to-br ${achievement.color} rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 w-full max-w-[600px] overflow-hidden`}
              >
                <div className="p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl inline-block mb-5 md:mb-6">
                  <Icon className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 text-white" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 break-words hyphens-auto">
                  {achievement.title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base lg:text-lg break-words hyphens-auto">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
