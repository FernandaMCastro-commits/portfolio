import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contato() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setErrorMsg(
        'EmailJS não configurado. Verifique o arquivo .env e reinicie o servidor.'
      )
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('success')
      setForm({ nome: '', email: '', mensagem: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg(
        err?.text || 'Falha ao enviar. Tente novamente em instantes.'
      )
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isLoading = status === 'loading'

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
          ref={formRef}
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
                name="nome"
                required
                disabled={isLoading}
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors disabled:opacity-60"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                required
                disabled={isLoading}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors disabled:opacity-60"
                placeholder="voce@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Mensagem</label>
            <textarea
              rows="5"
              name="mensagem"
              required
              disabled={isLoading}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-colors resize-none disabled:opacity-60"
              placeholder="Conte sobre o seu projeto..."
            />
          </div>

          <motion.button
            whileHover={!isLoading ? { scale: 1.02 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
            type="submit"
            disabled={isLoading || status === 'success'}
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' && (
              <>
                <Loader2 size={18} className="animate-spin" /> Enviando...
              </>
            )}
            {status === 'success' && (
              <>
                <CheckCircle2 size={18} /> Mensagem enviada!
              </>
            )}
            {(status === 'idle' || status === 'error') && (
              <>
                <Send size={18} /> Enviar mensagem
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {status === 'error' && errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-2 text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg p-3"
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-2 text-sm text-green-300 bg-green-500/10 border border-green-500/30 rounded-lg p-3"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>Recebi sua mensagem — responderei em breve!</span>
              </motion.div>
            )}
          </AnimatePresence>
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
