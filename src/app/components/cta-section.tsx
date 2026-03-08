import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0B0B 0%, #0F3D91 100%)' }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0F3D91]/30 to-transparent rounded-tr-full" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl mb-8 shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-[#0B0B0B]" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para começar a ganhar dinheiro extra?
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Junte-se a centenas de motoristas que já estão transformando suas corridas em uma fonte de renda adicional. 
                Cadastro rápido, aprovação em 24 horas.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all group"
                >
                  Cadastrar como Motorista
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Criar Campanha Publicitária
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Sem custos iniciais</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Pagamentos garantidos</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Empresas que confiam em nós:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map((logo, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <span className="text-white font-semibold">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
