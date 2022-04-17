import * as React from "react"
import Parallax from '../../components/shared/scroll/Parallax'
import { motion } from 'framer-motion'

const BlobWave = () => (
  <svg
    // style={{
    //   transform: "rotate(0deg)",
    //   transition: ".3s",
    // }}
    viewBox="0 0 1440 410"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(24.043, 27.215, 27.642, 1)" offset="0%" />
        <stop stopColor="rgba(159.604, 11, 255, 1)" offset="100%" />
      </linearGradient>
    </defs>
      <motion.g
      animate={{ scaleX: 1.5 }}
      transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse'}}
    >
        <path
          style={{
            transform: "translate(0,0)",
            opacity: 1,
          }}
          fill="url(#a)"
          d="m0 41 10 47.8C20 137 40 232 60 239.2c20 6.8 40-75.2 60-95.7s40 20.5 60 47.8c20 27.7 40 40.7 60 13.7 20-27 40-96 60-82s40 109 60 129.8c20 20.2 40-33.8 60-88.8s40-109 60-136.7C500 0 520 0 540 6.8c20 7.2 40 20.2 60 20.5 20-.3 40-13.3 60 20.5C680 82 700 164 720 177.7c20 13.3 40-40.7 60-41 20 .3 40 54.3 60 75.1 20 20.2 40 7.2 60 6.9 20 .3 40 13.3 60-20.5 20-34.2 40-116.2 60-143.5 20-27.7 40 .3 60 41 20 41.3 40 95.3 60 143.5 20 47.8 40 88.8 60 109.3s40 20.5 60-41 40-184.5 60-205 40 61.5 60 61.5 40-82 50-123l10-41v410H0Z"
        />
      </motion.g>
    <defs>
      <linearGradient id="b" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(184.498, 62, 243, 1)" offset="0%" />
        <stop stopColor="rgba(255, 0, 26.454, 1)" offset="100%" />
      </linearGradient>
    </defs>
      <motion.g
      animate={{ scaleX: 1.2 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse'}}
    >
    <path
      style={{
        transform: "translate(0,50px)",
        opacity: 0.9,
      }}
      fill="url(#b)"
      d="m0 246 10 13.7C20 273 40 301 60 314.3c20 13.7 40 13.7 60-20.5 20-33.8 40-102.8 60-109.3s40 47.5 60 68.3c20 20.2 40 7.2 60-6.8s40-27 60-54.7c20-27.3 40-68.3 60-41 20 27.7 40 122.7 60 143.5 20 20.2 40-33.8 60-34.1 20 .3 40 54.3 60 61.5 20 6.8 40-34.2 60-82 20-48.2 40-102.2 60-88.9 20 13.7 40 95.7 60 102.5 20 7.2 40-61.8 60-102.5C860 109 880 96 900 82s40-27 60-6.8c20 20.8 40 74.8 60 95.6 20 20.2 40 7.2 60 13.7 20 6.5 40 34.5 60 41s40-6.5 60-41S1240 96 1260 82s40 14 60 27.3c20 13.7 40 13.7 60 54.7s40 123 50 164l10 41v41H0Z"
    />
    </motion.g>
    <defs>
      <linearGradient id="c" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
        <stop stopColor="#1A00FF" offset="100%" />
      </linearGradient>
    </defs>
      <motion.g
      animate={{ scaleY: 1.1, scaleX: 1.2 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse'}}
    >
    <path
      style={{
        transform: "translate(0,100px)",
        opacity: 0.8,
      }}
      fill="url(#c)"
      d="m0 246 10-34.2C20 178 40 109 60 102.5s40 47.5 60 41 40-75.5 60-95.7c20-20.8 40 7.2 60 61.5 20 54.7 40 136.7 60 157.2s40-20.5 60-13.7c20 7.2 40 61.2 60 54.7s40-75.5 60-95.7c20-20.8 40 7.2 60 13.7 20 6.5 40-6.5 60-41S640 96 660 68.3C680 41 700 41 720 47.8c20 7.2 40 20.2 60 27.4 20 6.8 40 6.8 60 34.1 20 27.7 40 81.7 60 68.4C920 164 940 82 960 47.8c20-33.8 40-20.8 60 13.7s40 88.5 60 116.2c20 27.3 40 27.3 60 0 20-27.7 40-81.7 60-95.7s40 14 60 61.5 40 116.5 60 157.2c20 41.3 40 54.3 60 41 20-13.7 40-54.7 50-75.2l10-20.5v164H0Z"
    />
    </motion.g>
  </svg>
)

export default BlobWave

