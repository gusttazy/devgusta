import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-400 mb-4"></div>
            <span className="text-white text-lg font-semibold">Carregando...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
