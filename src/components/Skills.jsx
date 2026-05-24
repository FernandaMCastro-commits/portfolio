import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript / TS', level: 92, color: 'from-yellow-400 to-amber-500' },
  { name: 'Next.js', level: 88, color: 'from-gray-300 to-gray-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-500' },
  { name: 'Framer Motion', level: 85, color: 'from-pink-400 to-purple-500' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-emerald-500' },
  { name: 'Figma / UI', level: 80, color: 'from-orange-400 to-red-500' },
  { name: 'Git / GitHub', level: 90, color: 'from-violet-400 to-indigo-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">
            Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Habilidades & <span className="text-gradient">Ferramentas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: 'easeOut',
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
