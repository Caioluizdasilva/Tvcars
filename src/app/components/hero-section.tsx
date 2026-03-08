import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B0B0B 0%, #0F3D91 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0F3D91 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-sm text-[#D4AF37]">Inovação em Publicidade Digital</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforme seu carro em uma{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                plataforma de publicidade digital
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Gere renda extra enquanto dirige com telas digitais que exibem anúncios aos passageiros. 
              Tecnologia inteligente, instalação fácil e pagamentos mensais garantidos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] rounded-xl font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                Seja um Motorista Parceiro
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Anuncie seu Negócio
                <Play className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-[#D4AF37]">500+</p>
                <p className="text-sm text-gray-400">Motoristas Ativos</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-[#D4AF37]">2M+</p>
                <p className="text-sm text-gray-400">Visualizações Mensais</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-[#D4AF37]">150+</p>
                <p className="text-sm text-gray-400">Empresas Anunciando</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZCUyMHNjcmVlbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTcyNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Car interior with digital screen"
                className="w-full h-auto"
                width={800}
                height={600}
              />
              
              {/* Floating card overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">R$ 800 - R$ 2.500</p>
                    <p className="text-gray-300 text-sm">Ganhos mensais</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0F3D91]/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
