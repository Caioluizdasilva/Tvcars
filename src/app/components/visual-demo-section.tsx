import { motion } from 'motion/react';
import { Play, Maximize2, Volume2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VisualDemoSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F3D91 0%, #0B0B0B 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
            Veja a Tecnologia em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Telas digitais de alta qualidade que captam a atenção dos passageiros
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main demo container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763256340568-c75b0e95029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc3Mjk3MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital advertising screen display"
                className="w-full h-auto"
                width={1200}
                height={675}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />

              {/* Play button overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-2xl group"
                style={{ boxShadow: '0 0 60px rgba(212, 175, 55, 0.5)' }}
              >
                <Play className="w-10 h-10 text-[#0B0B0B] ml-1 group-hover:scale-110 transition-transform" />
              </motion.button>

              {/* Screen controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-white" />
                  </motion.button>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                    <span className="text-white font-semibold">00:15</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Feature tags */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              {['HD Quality', 'Auto-Play', 'Smart Content'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#0F3D91]/20 backdrop-blur-xl border border-white/20 rounded-xl"
                >
                  <span className="text-white font-semibold text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                title: 'Conteúdo Dinâmico',
                description: 'Anúncios atualizados em tempo real baseados em localização e horário',
              },
              {
                title: 'Alta Resolução',
                description: 'Telas Full HD que garantem qualidade visual excepcional',
              },
              {
                title: 'Gestão Remota',
                description: 'Sistema 100% automatizado com controle via internet',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
