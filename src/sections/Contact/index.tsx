"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

// Configurações do EmailJS
const serviceId = "service_lpbicy5";
const templateId = "template_nz60vlv";
const publicKey = "gwnEUAC8kpCMaBwvv";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Falha ao enviar mensagem.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyles = `
    w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10
    text-white placeholder-white/50 transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-[#00ff9d] focus:border-[#00ff9d]
    hover:bg-white/10 focus:bg-white/10
  `;

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fields = [
    { id: "name", label: "Nome", type: "text", placeholder: "Seu nome" },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "seu@email.com",
    },
  ];

  return (
    <>
      <Toaster position="top-right" />

      <section
        id="contato"
        className="min-h-screen flex items-center justify-center py-8 sm:py-24 px-2 sm:px-4 overflow-hidden"
      >
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#181818]/90 border border-[#00ff9d]/10 shadow-2xl
                       px-3 sm:px-6 md:px-12 py-6 sm:py-12 md:py-20"
          >
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <motion.div
                className="text-center mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-2xl sm:text-4xl font-bold bg-linear-to-r
                             from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text mb-3"
                  variants={fadeUp}
                >
                  Contato
                </motion.h2>
                <motion.p
                  className="text-white/80 text-lg max-w-2xl mx-auto"
                  variants={fadeUp}
                >
                  Vamos conversar! Entre em contato para falar sobre
                  oportunidades, projetos ou trocar ideias de tecnologia.
                </motion.p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {fields.map(({ id, label, type, placeholder }) => (
                    <motion.div
                      key={id}
                      className="space-y-1.5"
                      variants={formItemVariants}
                    >
                      <label
                        htmlFor={id}
                        className={`block font-medium ${
                          focusedField === id
                            ? "text-[#00ff9d]"
                            : "text-white/90"
                        }`}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        value={formData[id as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(id)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={placeholder}
                        required
                        className={inputStyles}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Subject */}
                <motion.div className="space-y-1.5" variants={formItemVariants}>
                  <label
                    htmlFor="subject"
                    className={`block font-medium ${
                      focusedField === "subject"
                        ? "text-[#00ff9d]"
                        : "text-white/90"
                    }`}
                  >
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputStyles}
                  />
                </motion.div>

                {/* Message */}
                <motion.div className="space-y-1.5" variants={formItemVariants}>
                  <label
                    htmlFor="message"
                    className={`block font-medium ${
                      focusedField === "message"
                        ? "text-[#00ff9d]"
                        : "text-white/90"
                    }`}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`${inputStyles} resize-none`}
                  />
                </motion.div>

                {/* Button */}
                <motion.div variants={formItemVariants}>
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-6 py-3 bg-[#00ff9d] text-[#121212] font-semibold rounded-full
                               flex items-center gap-2 hover:bg-[#00ff9d]/90 transition-all
                               disabled:opacity-50"
                  >
                    {sending ? "Enviando..." : "Enviar Mensagem"}
                    {!sending && (
                      <SendIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    )}
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
