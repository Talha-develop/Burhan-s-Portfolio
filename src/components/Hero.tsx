import React from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-slate-950">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-6xl mx-auto py-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-10 text-white tracking-tight"
        >
          Burhan Awais
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Forex Trader | Market Analyst | Trading Mentor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-16 leading-relaxed max-w-4xl mx-auto"
        >
          Professional forex trader with 3 years of hands-on experience in
          financial markets. Specializing in technical and fundamental analysis,
          risk management, and profitable trading strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-cyan-400 w-10 h-10" />
        </motion.div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  )
}
