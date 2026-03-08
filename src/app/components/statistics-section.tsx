import { motion } from 'motion/react';
import { Car, Eye, Building2, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Car,
    value: '500+',
    label: 'Motoristas Parceiros',
    description: 'Rede em crescimento',
    color: '#D4AF37',
  },
  {
    icon: Eye,
    value: '2M+',
    label: 'Visualizações Mensais',
    description: 'Alto alcance garantido',
    color: '#0F3D91',
  },
  {
    icon: Building2,
    value: '150+',
    label: 'Empresas Anunciando',
    description: 'Marcas confiam em nós',
    color: '#D4AF37',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Taxa de Satisfação',
    description: 'Clientes satisfeitos',
    color: '#0F3D91',
  },
];

export function StatisticsSection() {
  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
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
            Números que Impressionam
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Resultados reais de uma plataforma em crescimento constante
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300">
                {/* Icon with glow effect */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}30 0%, ${stat.color}10 100%)`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: stat.color }}
                  />
                </motion.div>

                {/* Value with counter animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <h3
                    className="text-5xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </h3>
                </motion.div>

                <h4 className="text-xl font-semibold text-white mb-2">{stat.label}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>

                {/* Bottom glow */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#0F3D91]/20 backdrop-blur-xl border border-white/20 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white font-semibold">Sistema operacional</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <span className="text-gray-300">
              Última atualização: Março 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
