import { motion } from 'motion/react';
import { UserPlus, Wrench, Monitor, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Cadastre-se',
    description: 'Preencha o formulário online e envie seus documentos. Aprovação em até 24 horas.',
    color: '#D4AF37',
  },
  {
    icon: Wrench,
    title: 'Instalação Gratuita',
    description: 'Nossa equipe instala a tela digital no seu carro sem custo. Processo rápido e profissional.',
    color: '#0F3D91',
  },
  {
    icon: Monitor,
    title: 'Anúncios Automáticos',
    description: 'A tela exibe anúncios inteligentes aos passageiros enquanto você dirige normalmente.',
    color: '#D4AF37',
  },
  {
    icon: DollarSign,
    title: 'Receba Mensalmente',
    description: 'Pagamentos garantidos todos os meses diretamente na sua conta. Simples e transparente.',
    color: '#0F3D91',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0F3D91]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comece a ganhar dinheiro extra em 4 passos simples
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center font-bold text-[#0B0B0B] shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                  }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Decorative glow */}
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full blur-xl opacity-50"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
