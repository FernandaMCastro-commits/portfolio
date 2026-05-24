import { motion } from 'framer-motion'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gray-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Olá, sou{' '}
          <span className="text-gradient">Fernanda</span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-300 font-bold">
            Desenvolvedor Frontend
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Crio interfaces modernas, performáticas e com microinterações
          inteligentes. Apaixonado por React, design system e experiências
          fluídas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#projetos"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition-shadow"
          >
            Ver projetos
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contato"
            className="px-7 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Entrar em contato
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { Icon: GithubIcon, href: 'https://github.com/FernandaMCastro-commits' },
            { Icon: LinkedinIcon, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:contato@email.com' },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full glass text-gray-300 hover:text-white"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
