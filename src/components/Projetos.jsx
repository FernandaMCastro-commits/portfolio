import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const projetos = [
  {
    title: 'Dashboard Analytics',
    desc: 'Dashboard responsivo com gráficos em tempo real, dark mode e mais de 30 componentes reutilizáveis.',
    tags: ['React', 'Recharts', 'Tailwind'],
    gradient: 'from-purple-500 via-pink-500 to-red-500',
  },
  {
    title: 'E-commerce Moderno',
    desc: 'Loja virtual completa com checkout, integração com gateway de pagamento e PWA.',
    tags: ['Next.js', 'Stripe', 'Zustand'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'SaaS Landing Page',
    desc: 'Landing page com animações scroll-triggered, formulários otimizados e SEO score 100.',
    tags: ['Astro', 'Framer Motion'],
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
  },
  {
    title: 'App de Tarefas',
    desc: 'Aplicativo full-stack com drag & drop, autenticação, real-time sync e offline-first.',
    tags: ['React', 'Supabase', 'DnD Kit'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">
            Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Trabalhos <span className="text-gradient">Recentes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 grid-bg opacity-20" />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-6xl font-black text-white/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors">
                    <ExternalLink size={15} /> Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <GithubIcon size={15} /> Código
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
