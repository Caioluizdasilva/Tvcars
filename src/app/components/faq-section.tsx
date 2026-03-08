import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quanto eu posso ganhar como motorista parceiro?',
    answer: 'Os ganhos variam de R$ 800 a R$ 2.500 por mês, dependendo do número de horas dirigidas, rotas e horários. Motoristas que trabalham em horários de pico e rotas movimentadas tendem a ter ganhos maiores.',
  },
  {
    question: 'A instalação da tela danifica meu carro?',
    answer: 'Não! A instalação é feita por profissionais certificados e não causa nenhum dano ao veículo. O sistema é fixado de forma segura e pode ser removido a qualquer momento sem deixar marcas ou danos.',
  },
  {
    question: 'Tenho que pagar alguma coisa para participar?',
    answer: 'Absolutamente não. O serviço é 100% gratuito para motoristas. Nós fornecemos a tela, fazemos a instalação, cuidamos da manutenção e ainda pagamos você mensalmente. Sem custos ocultos.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Os pagamentos são feitos mensalmente via transferência bancária, sempre até o dia 5 de cada mês. Você acompanha suas métricas e ganhos em tempo real através do nosso aplicativo.',
  },
  {
    question: 'Quanto custa anunciar na plataforma?',
    answer: 'Os valores variam de acordo com o pacote escolhido, duração da campanha e segmentação desejada. Temos planos a partir de R$ 500/mês. Entre em contato para um orçamento personalizado.',
  },
  {
    question: 'Posso escolher quais anúncios aparecem no meu carro?',
    answer: 'Trabalhamos apenas com empresas sérias e verificadas. Todos os anúncios passam por aprovação prévia. Se houver algum anúncio com o qual você não se sinta confortável, pode reportar e ele será removido.',
  },
  {
    question: 'Qual o tempo mínimo de contrato?',
    answer: 'Para motoristas, não há tempo mínimo. Você pode participar pelo tempo que quiser. Para anunciantes, o contrato mínimo é de 3 meses para garantir resultados consistentes.',
  },
  {
    question: 'A tela funciona mesmo sem internet?',
    answer: 'Sim! A tela possui memória interna que armazena os anúncios. Ela se atualiza automaticamente quando conectada à internet, mas continua funcionando offline com o conteúdo já armazenado.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0F3D91]/10 rounded-full blur-3xl" />
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
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o TV Cars Nova Friburgo
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-white pr-8 group-hover:text-[#D4AF37] transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#D4AF37]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#D4AF37]" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#0F3D91]/10 backdrop-blur-xl border border-white/20 rounded-2xl">
            <p className="text-white text-lg">
              Ainda tem dúvidas?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Falar no WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                Enviar E-mail
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
