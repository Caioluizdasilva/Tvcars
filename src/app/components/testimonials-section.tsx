import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Motorista Uber',
    image: 'https://images.unsplash.com/photo-1637028630036-eedb4ca365a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByaWRlc2hhcmUlMjBkcml2ZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjk3MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Em 3 meses já ganhei mais de R$ 3.500 extras sem fazer nada diferente. A instalação foi rápida e os pagamentos sempre chegam no prazo. Recomendo!',
    rating: 5,
  },
  {
    name: 'Maria Fernandes',
    role: 'Motorista 99',
    image: 'https://images.unsplash.com/photo-1637028630036-eedb4ca365a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByaWRlc2hhcmUlMjBkcml2ZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjk3MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Achei que seria complicado, mas foi super tranquilo. A tela não atrapalha nada e ainda recebo elogios dos passageiros. É dinheiro caindo do céu!',
    rating: 5,
  },
  {
    name: 'Roberto Costa',
    role: 'Dono de Restaurante',
    image: 'https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwZW50cmVwcmVuZXVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mjk3MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Meu restaurante teve um aumento de 40% no movimento depois que comecei a anunciar nas telas. O público é exatamente o que eu buscava!',
    rating: 5,
  },
  {
    name: 'Ana Paula Oliveira',
    role: 'Gerente de Marketing',
    image: 'https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwZW50cmVwcmVuZXVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mjk3MjQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Melhor custo-benefício em publicidade local. As métricas são transparentes e o alcance é impressionante. Nossa marca ficou muito mais conhecida!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F3D91]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
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
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de motoristas e empresas que confiam em nós
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-[#0B0B0B]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/50">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#D4AF37] rounded-full blur-xl opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] -ml-1 first:ml-0" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5.0</span>
            <span className="text-gray-400">média de avaliações</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <span className="text-[#D4AF37] font-bold text-2xl">500+</span>
            <span className="text-white">depoimentos positivos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
