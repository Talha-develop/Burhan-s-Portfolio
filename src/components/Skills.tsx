import React from 'react'
import { BarChart3, Brain, Briefcase, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
}

export default function Skills() {
  const skillCategories = [
    {
      title: 'Trading & Market Analysis',
      skills: [
        'Forex Trading',
        'Technical Analysis',
        'Fundamental Analysis',
        'Crypto Markets',
        'Risk Management',
        'Day Trading & Scalping',
      ],
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Trading Psychology & Strategy',
      skills: [
        'Trading Psychology',
        'Strategy Development',
        'Capital Allocation',
        'Portfolio Construction',
        'Discipline & Execution',
        'Market Trends Analysis',
      ],
      icon: Brain,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Business & Communication',
      skills: [
        'Client Acquisition',
        'Account Management',
        'Educational Mentorship',
        'Sales Strategy',
        'Client Relations',
        'Performance Reporting',
      ],
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section id="skills" className="py-24 md:py-48 lg:py-64 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Skills & Expertise
          </h2>
          <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.67rem)] max-w-md"
              >
                <div
                  className={`inline-block p-4 md:p-5 bg-gradient-to-br ${category.color} rounded-xl md:rounded-2xl mb-8 md:mb-10 lg:mb-12`}
                >
                  <Icon className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12">
                  {category.title}
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 md:gap-4"
                    >
                      <Check className="w-5 md:w-6 h-5 md:h-6 text-cyan-400 mt-1 shrink-0" />
                      <span className="text-gray-300 text-base md:text-lg lg:text-xl">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
