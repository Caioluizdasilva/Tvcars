import { motion } from 'motion/react';
import { DollarSign, Zap, Shield, TrendingUp, Target, BarChart3, Users, MapPin } from 'lucide-react';

const driverBenefits = [
  {
    icon: DollarSign,
    title: 'Renda Extra Garantida',
    description: 'Ganhe de R$ 800 a R$ 2.500 por mês apenas por ter a tela instalada no seu carro.',
  },
  {
    icon: Zap,
    title: 'Instalação Rápida e Fácil',
    description: 'Instalação profissional gratuita em menos de 2 horas, sem modificações permanentes.',
  },
  {
    icon: Shield,
    title: 'Sem Custos Operacionais',
    description: 'Zero investimento. Não pague nada pela tela, instalação ou manutenção.',
  },
  {
    icon: TrendingUp,
    title: 'Ganhos Passivos',
    description: 'Continue sua rotina normal enquanto a tela gera renda automaticamente.',
  },
];

const advertiserBenefits = [
  {
    icon: Target,
    title: 'Público Segmentado',
    description: 'Alcance passageiros de alta qualidade durante momentos de atenção concentrada.',
  },
  {
    icon: BarChart3,
    title: 'Alto Engajamento',
    description: 'Taxa de visualização de 95% com passageiros expostos por 15-45 minutos.',
  },
  {
    icon: MapPin,
    title: 'Visibilidade Local',
    description: 'Anuncie especificamente em Nova Friburgo e região, atingindo seu público-alvo.',
  },
  {
    icon: Users,
    title: 'Métricas em Tempo Real',
    description: 'Acompanhe visualizações, impressões e desempenho da sua campanha online.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0B0B 0%, #0F3D91 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
            Benefícios para Todos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma solução inovadora que gera valor para motoristas e empresas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Driver Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#0B0B0B]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Para Motoristas</h3>
              </div>

              <div className="space-y-6">
                {driverBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                      <benefit.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Cadastrar como Motorista
              </motion.button>
            </div>
          </motion.div>

          {/* Advertiser Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0F3D91] to-[#1E5BBF] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Para Anunciantes</h3>
              </div>

              <div className="space-y-6">
                {advertiserBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0F3D91]/30 rounded-xl flex items-center justify-center group-hover:bg-[#0F3D91]/50 transition-colors">
                      <benefit.icon className="w-6 h-6 text-[#5B9BF3]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-[#5B9BF3] transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-[#0F3D91] to-[#1E5BBF] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all border border-white/20"
              >
                Criar Campanha Publicitária
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
