import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setForm({ nome: '', email: '', mensagem: '' })
    }, 3000)
  }

  return (
    <section id="contato" className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Vamos <span className="text-gradient">conversar</span>?
          </h2>
          <p className="text-gray-400 mt-5 text-lg">
            Tem um projeto em mente? Adoraria saber mais.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={onSubmit}
          className="glass p-8 rounded-2xl space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Nome</label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors"
                placeholder="voce@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Mensagem</label>
            <textarea
              rows="5"
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors resize-none"
              placeholder="Conte sobre o seu projeto..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={enviado}
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition-shadow disabled:opacity-70"
          >
            {enviado ? (
              <>
                <CheckCircle2 size={18} /> Mensagem enviada!
              </>
            ) : (
              <>
                <Send size={18} /> Enviar mensagem
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-20 pb-6">
        © {new Date().getFullYear()} Feito com{' '}
        <span className="text-pink-400">♥</span> usando React + Vite + Framer
        Motion
      </footer>
    </section>
  )
}
