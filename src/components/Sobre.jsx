import { motion } from 'framer-motion'
import { Zap, Layers, Sparkles } from 'lucide-react'

const features = [
  {
    Icon: Zap,
    title: 'Performance',
    desc: 'Foco em Core Web Vitals, code-splitting e UX rápido em qualquer dispositivo.',
  },
  {
    Icon: Layers,
    title: 'Componentização',
    desc: 'Design system escalável, componentes reutilizáveis e DX impecável.',
  },
  {
    Icon: Sparkles,
    title: 'Microinterações',
    desc: 'Animações sutis que dão vida à interface sem comprometer a usabilidade.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">
            Sobre mim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Construindo a web do <span className="text-gradient">futuro</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Há mais de 5 anos transformo ideias em interfaces. Trabalho com
            React, Next.js e ecossistema moderno — sempre com olhar atento ao
            detalhe e à experiência do usuário final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass p-7 rounded-2xl group hover:border-purple-400/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
