// app/loading.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* โลโก้ (ใช้ public/logo.png หรือ SVG ได้เลย) */}
        <motion.div
          className="w-20 h-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <Image
            src="/PortLogoWhite.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full shadow-xl"
          />
        </motion.div>

        {/* ข้อความและ Spinner */}
        <div className='flex items-center gap-3'>
          {/* <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"
          whileHover={{ scale: 1.2 }}
        /> */}
        <motion.p
          className="text-2xl font-semibold text-white"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.p>

        
        </div>
      </motion.div>
      
    </div>
  );
}
