"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

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
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro EmailJS:", error);
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

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const inputStyles =
    "w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 " +
    "text-white placeholder-white/50 transition-all duration-300 " +
    "focus:outline-none focus:ring-1 focus:ring-[#00ff9d] focus:border-[#00ff9d] " +
    "hover:bg-white/10 focus:bg-white/10";

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

  return (
    <>
      <Toaster position="top-right" />
      <section
        id="contato"
        className="min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden bg-transparent"
      >
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#181818]/90 border border-[#00ff9d]/10 shadow-2xl px-6 sm:px-12 py-12 md:py-20 flex flex-col justify-center min-h-[70vh]"
          >
            <div className="container max-w-3xl mx-auto">
              <motion.div
                className="text-center mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-4xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00ff9d]/70 text-transparent bg-clip-text mb-3"
                  variants={fadeUp}
                >
                  Contato
                </motion.h2>
                <motion.p
                  className="text-white/80 text-lg max-w-2xl mx-auto"
                  variants={fadeUp}
                  transition={{ delay: 0.1 }}
                >
                  Vamos conversar! Entre em contato para falar sobre
                  oportunidades, projetos ou trocar ideias de tecnologia.
                </motion.p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  variants={staggerContainer}
                >
                  {[
                    {
                      id: "name",
                      label: "Nome",
                      type: "text",
                      placeholder: "Seu nome",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "seu@email.com",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <motion.div
                      key={id}
                      className="space-y-1.5"
                      variants={formItemVariants}
                    >
                      <label
                        htmlFor={id}
                        className={`block text-white/90 font-medium transition-all duration-300 ${
                          focusedField === id ? "text-[#00ff9d]" : ""
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
                        onFocus={() => handleFocus(id)}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        required
                        className={inputStyles}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="space-y-1.5" variants={formItemVariants}>
                  <label
                    htmlFor="subject"
                    className={`block text-white/90 font-medium transition-all duration-300 ${
                      focusedField === "subject" ? "text-[#00ff9d]" : ""
                    }`}
                  >
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    placeholder="Assunto da mensagem"
                    required
                    className={inputStyles}
                  />
                </motion.div>

                <motion.div className="space-y-1.5" variants={formItemVariants}>
                  <label
                    htmlFor="message"
                    className={`block text-white/90 font-medium transition-all duration-300 ${
                      focusedField === "message" ? "text-[#00ff9d]" : ""
                    }`}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Sua mensagem..."
                    rows={5}
                    required
                    className={`${inputStyles} resize-none`}
                  />
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto px-6 py-3 bg-[#00ff9d] text-[#121212] font-semibold text-base rounded-full
                         hover:bg-[#00ff9d]/90 transition-all duration-300 flex items-center justify-center gap-2
                         relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2 text-[#121212]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        <span className="relative z-10">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FiSend
                          size={20}
                          strokeWidth={2.5}
                          className="transition-transform group-hover:scale-110 group-hover:rotate-12"
                        />
                        <span className="relative z-10">Enviar Mensagem</span>
                      </>
                    )}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out"
                    />
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
