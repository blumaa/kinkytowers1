import React from 'react'
import { motion } from 'framer-motion'

const beastVariants = {
  hidden: {
    x: '0px',
  },
  visible: {
    x: ['40rem', '0rem'],
    y: ['-200px', '-500px', '-100px', '-25px', '0px'],
  },
}

const LittleBeast = () => {
  return (
    <motion.svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 431.37 419.5'
      // variants={beastVariants}
      // initial='hidden'
      // animate={{ ...beastVariants.visible, scale: [0, 0.3, 0.5, 1] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      // className="LittleBeast"
    >
      <g fill='white'>
        <path d='M427.16 369.65a52.3 52.3 0 0 1-5.94-15.91c-1.23-6-.68-12.27-1.57-18.33-2.1-14.18-5-28.25-6.79-42.46-1.56-12.21-9.07-19.46-21.2-19.51-3.91 0-7.83-1-11.71-1.7-.35-.07-.64-1.37-.65-2.11-.26-15.25 0-30.53-.86-45.75-.69-12.23-2.43-24.41-4.27-36.53-1-6.34-3.28-12.47-4.68-18.76-.33-1.49.58-3.26.92-4.9 1.19.81 2.68 1.39 3.52 2.48 3.62 4.69 6.75 9.77 10.6 14.25 9.85 11.46 17.31 24.28 23.34 38.08.82 1.89 3.7 2.89 5.63 4.31 1.46-2.84 4.52-5.93 4.1-8.45a195.24 195.24 0 0 0-6.62-27.14c-3.32-10.39-7.48-20.5-11.39-30.69-4.1-10.67-11.87-18.69-19.5-26.81.4-1.44.42-3.81 1.27-4.15a27.59 27.59 0 0 1 7.67-1.47 17 17 0 0 1 4.06.56l-1.76 3.16 1.7.17c6.88-.19 14.79 4.18 16.61 9.17l1.41.84 2.19 2.35.85 1.44c2.65 2.19 5.17 4.58 8 6.49 1.53 1 3.59 1.27 5.42 1.87.39-2.08 1.6-4.44 1-6.2-1.5-4.56-3.79-8.85-5.76-13.24-3.18-5.23-5.68-11.07-9.69-15.57a87.26 87.26 0 0 0-43.39-26.83c-.67-.18-1.67-.95-1.65-1.42a2.462.46 0 0 1 1.35-1.87 18 18 0 0 1 5.26-1c9.59-.14 19.23.27 28.77-.46 2.38-.18 5.15-3.59 6.39-6.17.5-1-2.24-5-4.15-5.62-17.13-5.52-34.39-10.66-51.65-15.77-13.14-3.9-26.07-1.66-38.69 2.3-7.36 2.31-14.69 5.24-18.73 12.71.19 2.11 0 4.38.71 6.28.6 1.56 2.33 3.75 3.55 3.74 1.67 0 3.49-1.64 4.95-2.92 3.76-3.25 7.36-6.69 11-10.06a68.77 68.77 0 0 1 48-.34c3.73 1.3 7.58 2.27 11.35 3.48a8.41 8.41 0 0 1 1.94 1.27c-.6.4-1.16 1.07-1.8 1.15-5.86.72-11.73 1.33-17.6 2l-12.58 7.89c-.73 1.87-1.51 3.72-2.18 5.6-1 2.74-2.59 5.48-2.65 8.25-.1 3.77-1.55 4-4.18 2.65-8.45-4.19-15.26 0-22.73 3.38-3.31 1.5-8.24-.49-12.42-1-3.34-.39-6.66-1-10-1.35-.73-.08-2.13.25-2.18.56-1.06 6.58-5.35 3.37-9.1 3.71-5.59.52-11.19 2.54-16.41 4.79-3.27 1.41-4.78 1.73-6.52-1.85-5.72-11.93-25.18-17.42-35.86-10.16-1.93 1.31-2.91 4.16-4.06 6.43a65.46 65.46 0 0 0-2.44 6.29l2.88 6.49 3.16 5.65 6 3c2.59-1 5.56-1.58 7.63-3.24 1.48-1.19 1.76-3.87 2.57-5.89-1.86-.23-4.14.12-5.47-.85-1.67-1.2-3.91-4-3.47-5.21.87-2.52 3.49-6.4 5.21-6.31 7.42.39 13.87 3.59 17.62 10.51a4.41 4.41 0 0 1-.59 4c-15.77 17.24-19.25 36.45-9.57 57.87l3.69 6.57c12.22 18.11 30.32 24.53 53 18a54.31 54.31 0 0 1 5.72-1l7.88-1.3c4.16-5.69 7.6-12.15 12.65-16.9 9.77-9.2 10.62-20.51 10.69-32.7.08-11.86-7.48-20.42-11.54-30.49-.75-1.88-1.59-5.09-.69-6 1.93-1.94 5-2.77 7.56-4 .49 1.61 1.77 3.48 1.35 4.79-2 6.24.32 11.29 5.1 9.62 2.33-.81 3.91-4.24 5.43-6.73a7.51 7.51 0 0 0 .66-4.38c-.64-6.18-.27-10.42 8.28-9.5 3.94.43 8.16-3.55 12.47-4.31 7.45-1.32 13.78 2.14 19.59 6.52 5.35 3.91 13 5 15.47 12.46l4.18 3.13-4.64-1.28-20.26-5.65-4.84-1-2.49-1.89-.05.07-4.43 3.74.12 6c.06 9 4.74 15.5 11.12 21.15 10.46 10.17 16.6 22.93 21.67 36.3.39 1-.09 2.4-.17 3.62-1-.31-2.38-.31-2.85-1-8.16-11.43-16.21-22.93-24.26-34.43-.16-.23 0-.65 0-1-2-.7-3.91-1.55-5.93-2.05-3.33-.82-6.56-1.11-7.29 3.55l.22 13.39c.2 1.46.4 2.92.61 4.37.67 2.34 1.35 4.68 2 7l.3.06h-.29l.57 2.89c.58 1.24 1.17 2.47 1.75 3.7l.12 3.85c.8.44 2.17.77 2.29 1.35 1 4.92 1.79 9.89 2.64 14.84l.21 10.23-.06 4.28c.25 1.55.5 3.09.76 4.64l.39 1.3.46 14.88c.1 2.36.21 4.71.31 7.07.17 9.8.41 19.6.45 29.4 0 1.5-.86 3-1.32 4.51a20.81 20.81 0 0 1-2.69-4 21.63 21.63 0 0 1-.78-4.87c-1.69-12.89-2.8-25.9-5.29-38.63-1.25-6.41-5.07-12.31-7.6-18.5-2.63-6.43-5.09-12.92-7.63-19.39l-4.36-2.47c-1.72 4.27-3.72 8.34-4.92 12.68-.54 2 .68 4.51 1.1 6.78.12 5.34 1.34 10.94.13 16-3.34 13.84-7.17 27.62-11.85 41.06-2.93 8.43-7.72 16.22-11.68 24.3q-4.65 7.32-9.28 14.64c-1.74 3.43-3.44 6.88-5.28 10.26-.29.52-1.55 1.1-1.87.89a3.57 3.57 0 0 1-1.65-2.19 36 36 0 0 1 .39-5.36l.27-5.21c.13-.68.27-1.36.4-2q1.13-8.38 2.24-16.77.33-3.75.64-7.5c.11-6 .08-12.06.36-18.08.34-7.21.94-14.41 1.43-21.62l-.18-5.6-2-7.05c-.38-.37-.77-.73-1.16-1.09-3.73-2.8-7.42-2.78-11.06.18l-.42 2.49-2.24 5.31-.67 2.27-.87 1.62c-8.62 14-17.06 28.1-25.94 41.91-3.22 5-7.5 9.34-11.29 14l-7.16 10.75c-2.74 3.5-5.42 7.06-8.27 10.48a16.54 16.54 0 0 1-3.22 2.37 14.88 14.88 0 0 1-1.49-3.36c-2.76-15.8.14-30.93 5.64-45.73-.79-7.73 3.85-13.26 7.62-19.22 2.34-3.69 4.23-7.66 6.32-11.51l.73-.84 2.21-2.11v-.07q2.54-6.08 5.06-12.14L246 207.4l-17.39 3.75-33.41 19-5.06 2.87c-1.89 1.44-4.3.47-6.16 4.12-2.46 4.82-8.94 7.59-13.7 11.24-4 4-7.94 8.08-12.18 11.81-1 .86-3.12.38-4.73.52a19.67 19.67 0 0 0-.07-3.17c-2.19-12.68 3.69-23.65 8.65-34.29 4-8.56 10.79-15.88 16.74-23.44 2.73-3.46 6.39-6.19 9.63-9.25 1.34-1.32 2.49-2.93 4-3.91 5.9-3.75 11.58-8.25 18-10.66s13.64-2.68 20.54-3.84c.12-8.54-5.28-14.09-15.06-13.89-21.18.42-42.34 1.45-63.51 2.26a7.94 7.94 0 0 0-1.89.59l-6.54 1.34c-2.21.46-4.42 1.26-6.65 1.29a13.63 13.63 0 0 1-5-1.34c1-5 2.37-10 3.66-14.94 6.2-17.73 19.62-29.17 34.39-39.43l2.48-1.84.16-.06c1-1 1.78-2.37 3-2.84 7-2.83 14.06-5.65 21.25-8 2-.65 4.47.24 6.72.43 5.48-.4 7.56-3.66 7.41-8.81-1.82-2.1-3.64-4.21-5.47-6.31-12-.61-24-2.92-35.69 2.09l-6.35.53-8.54 5.66c-.44-.88-1.47-2-1.22-2.59 1.65-3.83 3.57-7.55 5.41-11.3 1-6.72 7.07-7.93 11.71-10.67l23.35-12.62c1.76-.78 3.58-2.35 5.28-2.22 9.19.71 18.39 1.59 27.5 2.95 3.62.54 7 2.47 10.53 3.77 8.8-1.33 13.58 4.21 17.92 10.49l8.58.19.76-.7c.2-1.81.41-3.61.61-5.42-1.78-1.82-3.63-3.58-5.35-5.46-8.45-9.28-16.45-18.86-19.98-31.29-.71-2.49-2.22-4.79-2.74-7.31-.27-1.32.42-3.78 1.35-4.2 1.39-.62 4-.55 5 .39 4.62 4.33 8.89 9 13.22 13.68 1.23 1.32 2.21 2.87 3.31 4.31 4.4 4 9.13 7.72 13.12 12.1 6.73 7.37 8.79 19.28 21 21.3 5.69-6.25 5-8.39-1.1-13.89a207.58 207.58 0 0 1-20.63-21.9c-9.83-12-18.75-24.74-35.41-28.22-5.5-1.15-12.13 1.51-11.06 5.46 3.05 11.29 6.53 22.47 9.83 33.7.43 1.46.8 2.95 1.19 4.42-1.94 0-3.88 0-5.82-.11-11.08-.52-22.47-2.89-33.16-1.11a66.8 66.8 0 0 0-32.37 15.68c-12 10.4-22.75 21.91-27.66 37.45-.88 2.8 1.06 6.5 1.69 9.79 3.89-1 8.66-.87 11.49-3.15 8.4-6.8 17.1-12.17 28.27-12.12.85 0 1.68.87 2.53 1.34a10.63 10.63 0 0 1-1.81 1.63c-3.94 2.11-8.19 3.76-11.82 6.3-4.67 3.28-8.82 7.29-13.25 10.9-14.61 11.89-26.14 26.18-32.59 44-1.54 4.27-1.45 9.59-.62 14.16 1.15 6.27 8.18 7.86 13.83 5s12-5.49 18.19-5.94c13.48-1 27.07-.51 40.62-.55a34.52 34.52 0 0 1 6.93.76 2.79 2.79 0 0 1 1.75 1.92 3 3 0 0 1-1.16 2.3c-6.75 4.88-14.34 8.9-20.2 14.68a202.16 202.16 0 0 0-22.64 26.67c-4.49 6.32-7 14.07-10.37 21.16a2.44 2.44 0 0 1-.39.52c-.07.07-.16.14-.23.22a.73.73 0 0 0-.2.19c-.05.09 0 .21-.08.31s-.18.12-.19.28a.88.88 0 0 1-.11.42 2.25 2.25 0 0 0-.19.38c-.11.32-.15.67-.26 1-.22.62-.34 1.26-.53 1.89-.33 1.11-1 2.1-1.36 3.19a8.36 8.36 0 0 1 .15 2c-.6 5.71-1.81 11.41-1.77 17.11 0 6.13 4.46 10.2 9.42 8.41 3.67-1.33 6.31-5.32 9.67-7.79 12.69-9.3 25.48-18.46 38.24-27.68l3.64-2c-.28 1.26-.55 2.53-.83 3.79-2 5-4.24 9.92-6.12 14.93-1.7 4.51-1.43 9.3-2.27 13.79-1.05 5.63-2.09 11.25-3.16 16.87-.71 3.74-.72 8.5-3.66 11.27l-.63 7.79q-1.08 5.51-2.17 11l-.42 8.83c-.18 3.87.25 7.87.38 11.74.11 3.67-.2 7.66.78 11.22.31 1.14.75 2.24 1.08 3.38s.56 2.42.78 3.64l1.89 10.6c.29 1.62.33 3.19.46 4.83.1 1.24.79 3.7.38 4.85-.48 1.36-1.64 3.74-1.34 3.94 3.35 2.23 6.92 4.13 10.43 6.12l4-1.44 2-1.11c.19-.45.39-.9.59-1.36.22.47.44.94.65 1.41l7.63.47-9.03-7.31-3.21-6.47-2.67-8c-1.15-4.67-2.81-9.28-3.35-14-1.13-9.82-2.83-19.78-2.14-29.54.83-11.63 3.59-23.16 6.11-34.61 2.84-13 6.34-25.78 9.56-38.67l2.62-1.55.3-.3c-.7-4.25 0-7.86 4.53-9.62l.78-1.35 1.41-1.5 1.1-2.36c.46-5 4.18-1.89 6.38-2.55l2.53-.55 2.82-1.76 2.2-.29 6.79.11c-.07 1.75-.13 3.51-.2 5.27l-1 1.17c-3.45 6.52-7.63 12.77-10.21 19.63-5 13.33-10 26.78-13.3 40.58-2.81 11.69-3.43 23.95 2.92 35.27 1.64 2.92 3.87 4.84 6.52 1.81 6.51-7.48 12.61-15.3 18.88-23q3.51-4.1 7-8.17a.33.33 0 0 0 .25-.44.47.47 0 0 1 .54-.54l2-3.09 1.74-2.39c.54-.78 1.09-1.56 1.63-2.35l1.09-1.6 3.54-3.42 2.2-2.93 2.59-3.59 1.25-1.19.93-1.72 1.26-1.29 3.15-4.28 6.66-9.57c.37-.83.75-1.67 1.13-2.5l9.24-13.65a.52.52 0 0 0 .28-.58c.27-.71.55-1.42.82-2.12l1.15 1.11a.37.37 0 0 0 .41.41c.82 2.1 2.43 4.24 2.31 6.28-.43 7.11-1.46 14.19-2.26 21.27-.06.86-.13 1.73-.2 2.59-.66 10.53-1.25 21.06-2.08 31.57-.08 1-1.63 1.86-2.5 2.78-.12 1.23-.25 2.48-.37 3.73-1.64 7.59-3.7 15.13-4.72 22.81-.52 3.89.87 8 1.39 12 3.15-2.8 6.64-5.31 9.35-8.49 3.21-3.77 5.75-8.11 8.58-12.2.07-.67.15-1.34.22-2q6.66-10.69 13.3-21.39a182.71 182.71 0 0 0 23.72-54.95c1.56-6.43 3.39-12.8 5.18-19.18.18-.62 1.29-1.61 1.45-1.52 1.07.61 2.43 1.27 2.89 2.28a54.28 54.28 0 0 1 2.13 6.84c4.9 9.43 5.66 19.6 5.37 30q.56 6.06 1.1 12.12l1.44 8.79.09 7.22q-.76 4.95-1.55 9.9v6.92l.37 1.36c3.87 2.24 7.33-.25 9.16-6.61l2.58-6.67.78-1.12.79-2.1c.77-1.46 1.45-3 2.32-4.37a34.27 34.27 0 0 1 2.42-3.09c.4 1.36 1.14 2.72 1.15 4.09q.19 26.66.19 53.31c0 8.54 0 17.09-.46 25.6-.09 1.48-2.34 3.56-4 4.06-3.2 1-6.7 1-10.06 1.5-5.39.85-8.57.07-8.62-6.83-.09-12-.88-24.1-2.12-36.07-1.4-13.48-3.73-26.87-5.39-40.32-.53-4.23.06-8.59-.38-12.84a15.15 15.15 0 0 0-2.55-7.26c-.72-1-4.61-1.1-5.19-.28-1.61 2.29-3.29 5.34-3.1 8 1 13.69 2.4 27.36 3.91 41 .83 7.5 2.27 14.93 3.21 22.42q3.24 25.8 6.17 51.63c.17 1.54-1 3.23-1.51 4.86-1.36-.62-3.1-.92-4-1.94-1.9-2.15-3-5.08-5.12-6.95-1.78-1.59-4.66-3.18-6.72-2.82-1.56.27-2.84 3.49-3.77 5.61-.56 1.27 0 3-.35 4.42a3.3 3.3 0 0 1-2 2.14 3.18 3.18 0 0 1-2.66-1.37c-1-2.07-1.39-4.44-2.38-6.53-.75-1.57-2.17-4.14-3.09-4.05-2.15.2-4.83 1.21-6.12 2.83-2.42 3-3.81 6.84-6 10-.87 1.26-2.82 1.78-4.28 2.64-.14-1.92-1-4.24-.3-5.71 4-7.83 9.37-15.1 12.45-23.24a118.81 118.81 0 0 0 6.68-27.83c1.3-11 1.11-22.25 1-33.38 0-2.54 2.28-9.32-5.36-6.24l-1.71 4.13c-.24 2-.49 4-.73 6l-.24 1.94v7.3l-2.13 27c-.22 1-.44 2-.67 3-.47 2.69-.94 5.39-1.41 8.07-.39 1.71-.79 3.42-1.18 5.13l-4.26 7.86-.5 1-4.18 5.93-2.21 2.79-4.11-1.19-10-.86-5.27-.18-1.58-2.56-1.56-4.84c-.1-1.46-.21-2.92-.32-4.39v-6.96c0-1.05 0-1.94-.05-2.91.18-3.68.37-7.37.55-11.06q.78-4.44 1.55-8.86v-32.35q.27-4.25.56-8.49c.51-1.85 1-3.69 1.54-5.54.43-1.26.85-2.53 1.28-3.8 0-.55-.07-1.11-.1-1.66l-1.32-2.92c-.37-.52-.73-1.05-1.1-1.56-.34-.87-.69-1.74-1-2.61-5-.2-6.84 2-7 7.17-.38 12.83-1.46 25.65-2.25 38.46q.32 4 .64 7.95v1.32c-.16 1.25-.32 2.5-.49 3.76l-.25 40.89c.19 1.38.38 2.78.58 4.17 3.46 6.05 2.49 11.76-2.4 14.24l-2.86-.47-3-2c-.93-1.33-1.65-2.9-2.85-3.94a56 56 0 0 0-5.75-3.93c-1.43 2.39-2.88 4.77-4.26 7.19-.23.4 0 1.08-.25 1.45-.62.91-1.39 1.71-2.1 2.56-.56-.91-1.52-1.8-1.58-2.75-.16-2.47.44-5 0-7.44s-1.64-4.56-2.52-6.84c-2.17 1.15-4.35 2.27-6.5 3.46-.93.51-1.79 1.16-2.68 1.75.27-1.21.13-2.84.87-3.56 3.53-3.44 7.52-6.42 10.88-10 2-2.16 4.14-5 4.6-7.74 1.6-9.6 2.5-19.31 3.66-29-.62-1.46-2.06-3.17-1.71-4.33.77-2.51 2.45-4.73 3.76-7.08l-.75-2.23c-.38-1.65-1.16-3.33-1.08-5 .18-3.58.8-7.15 1.24-10.72-2.49-3.77-4.24-1.21-5 1a93 93 0 0 0-3.31 13.87c-1.07 6.68-1.71 13.42-2.49 20.14-.8 7-1.35 14-2.46 20.92-.3 1.84-2 3.74-3.47 5.05-4.84 4.18-10.52 7.55-14.75 12.24-6.32 7-12.72 14.56-8.2 25.32l10.9.14c3.46-1.66 6.94-9.14 10.36 0l9.77 2.26 2.73-1.36c3.75-.22 7.5-.65 11.25-.58 2.26 0 4.51.84 6.76 1.3 6-.07 11.54-5.29 12.29-11.64.66-5.45 8.23-9.41 13-6.57 1.12.66 2.29 2.72 2.07 3.88-1.27 6.7 1.86 12 4.87 17.41 2.92-.43 5.93-.54 8.71-1.4 1.84-.57 3.36-2.2 5-3.35l2.49-3.61.47-1.64 1.1.54 1.38.73 11.43 5.8c8.44-7.93 8.33-7.78 17.53-1.18 2.21 1.59 6.47 3.41 7.87 2.42a16.68 16.68 0 0 0 6.39-9.11c.92-4.17-.16-8.82-.58-13.24-.32-3.31-.76-6 4-6.67 6.36-.88 12.6-2.66 18.92-3.9.42-.08 1.65 1.19 1.57 1.66-1.42 7.65 2.87 12.51 8 17l11.71 3.49 2.79.48 12-2.59c.91-1.27 1.55-3.13 2.78-3.71 10.16-4.6 11.99-11.99 6.29-21.55ZM326.98 153.31c-1.39 11.2-6.71 19.75-13 28.06-7.79 10.26-24.24 14.6-37.2 11.47-11.64-2.81-19.73-9.58-24.63-19.31-9.5-18.85-4.76-39.4 11.55-51 7.45-5.32 16.23-9 26.15-6 1.17.35 3.91-.6 4-1.31 1-5.09 4.3-4.12 6.67-2.16 5.44 4.52 10.43 9.6 15.48 14.57.52.51.22 1.85.3 2.81a18 18 0 0 0-2.51-.26 127 127 0 0 0-13.68.7c-1.25.17-2.83 2.36-3.07 3.82-.18 1.11 1.36 3.49 2.4 3.65 6.11.94 12.68 5.81 18.23-1.52.33-.43 3.37.18 3.66.9 2.13 5.1 3.83 10.38 5.65 15.58Zm86.27 227.5c-1.83-1.75-2.58-4.68-4.47-6.3-1.45-1.24-4.26-2.06-5.93-1.5-1.3.45-1.85 3.28-2.6 5.11s-1.17 3.46-1.75 5.19c-2-2-5.8-4.15-5.59-5.84.56-4.44.78-8-3.48-10.62-.57-.35-.61-1.8-.63-2.75-.28-14.88-.64-29.76-.72-44.65-.06-8.78-.15-17.62.77-26.33.36-3.36 3.48-6.43 5.35-9.63 3.05 3.06 8 5.67 8.82 9.26 2.49 10.25 3.34 20.89 4.84 31.38.18 2.19.37 4.38.55 6.57l.17.23 1.44 1.91c.38 11.1.24 22.26 1.43 33.27.44 4 4.23 7.57 6.2 11.48.69 1.37.51 3.18.73 4.78-1.75-.48-3.98-.46-5.13-1.56Z' />
        <path d='M301.17 173.4c-5.87 1.09-11.74 2.2-17.61 3.26-10.5 1.88-23.82-10.11-22.85-20.89.11-1.26 3-3.43 4.14-3.18 2 .44 4.93 2.19 5.27 3.84.89 4.22 1.56 7.57 6.38 9.41 6.65 2.55 8.94 1.41 9.66-5.74.25-2.41 1.22-6 2.83-6.68 2-.81 5.25.46 7.52 1.67 1 .54.94 3.11 1.47 4.72.39 1.22 1 2.37 1.47 3.55 1-.68 2-1.37 3.07-2 2.76-1.75 5.95-5.34 8.23-4.84 5.29 1.16 4.06 5.76 2.44 9.64-2.17 5.19-4.56 10.13-11.6 9.21Zm-17.76-35.82c.95-1.18 1.77-3.67 1.16-4.6a7.09 7.09 0 0 0-4.78-2.69 48.89 48.89 0 0 0-10.11.31c-1.57.18-4 .91-4.33 1.94-.51 1.61-.21 4.63.88 5.37 3.06 2.08 6.7 3.3 11.17 5.34 2.05-1.87 4.32-3.54 6.01-5.67Z' />
      </g>
      <path
        d='M260.48 30.88c4.4 4 9.13 7.72 13.12 12.1 6.73 7.37 8.79 19.28 21 21.3l2 6.68c.19 2.11 0 4.38.71 6.28.6 1.56 2.33 3.75 3.55 3.74 1.67 0 3.49-1.64 4.95-2.92 3.76-3.25 7.36-6.69 11-10.06 6.58 6.43-.05 8-3.81 11-2.52 2-4.52 4.65-6.64 7.11a34 34 0 0 0-2.46 3.74c1.58-.44 3.18-1.32 4.72-1.21a44.12 44.12 0 0 1 6.94 1.62c-1.44 2.24-2.43 5.57-4.44 6.4s-5.42-.18-7.91-1.15c-3.79-1.49-7.23-4.88-11-5.16-4.2-.3-5.58-2.31-6.45-5.32-.76-2.63-.59-5.53-1.22-8.22a5.32 5.32 0 0 0-2.43-2.78 101.91 101.91 0 0 0-8.85-4.63c-2.67-1.23-5.47-2.19-8.21-3.27.2-1.81.41-3.61.61-5.42l9.87-1c-1.68-3.08-2.6-7.53-5.19-9-8.19-4.5-5.04-14.04-9.86-19.83Zm4.69 324.43a21.83 21.83 0 0 1-1 3.1 22.36 22.36 0 0 0-2.37-1.25 16 16 0 0 0-4.93-1.52c-.47 0-1.79 2.76-1.37 3.57.8 1.57 2.88 4 3.86 3.72 6.93-1.72 6.24 3.29 6.9 7.22.46 2.72.94 5.44 1.41 8.18l.15-40.92c-.86 5.96-1.72 11.9-2.65 17.9Zm-14.85 56.89c1.17 2.42 2.29 4.87 3.44 7.31 2.38-1.2 5.44-1.86 7-3.75 2.07-2.58 3-6.11 4.38-9.23-2.25-.46-4.5-1.26-6.76-1.3-3.75-.07-7.5.36-11.25.58 1.04 2.12 2.14 4.23 3.19 6.38Zm34.33-90.48a61.25 61.25 0 0 0-1.87 13.59c0 2.33 1.94 4.66 3 7 2.25-1.14 5.38-1.7 6.58-3.53 4.3-6.52 7.95-13.47 11.84-20.25-2.83 4.09-5.37 8.43-8.58 12.2-2.71 3.18-6.2 5.69-9.35 8.49-.52-4-1.91-8.15-1.39-12 1-7.68 3.08-15.22 4.72-22.81-1.68 5.69-3.58 11.44-4.95 17.3Zm-7.36-43.2c0-.13 0-.42-.11-.44a6.79 6.79 0 0 0-9 6c-.16 3-.22 5.94-.24 8.91q-.14 15.68-.2 31.36c.79-12.81 1.87-25.63 2.25-38.46.15-5.19 2-7.37 7-7.17.07-.05.27-.11.3-.21Zm-44.52 133c-1.53 3.31-2 7 2 7.38 2.12.21 4.92-3.45 6.91-5.79 1.34-1.59 1.79-3.93 2.64-5.94l-9.77-2.26c-.54 2.21-.83 4.56-1.78 6.6Zm188.45-258.7c.9 1.12 3.73 1.69 5.23 1.19 5.64-1.89 5.47-7.24 4.14-11.16-1.5-4.42-5.12-8.12-7.82-12.14 2 4.39 4.26 8.68 5.76 13.24.58 1.76-.63 4.12-1 6.2-1.83-.6-3.89-.83-5.42-1.87-2.83-1.91-5.35-4.3-8-6.49 2.31 3.71 4.39 7.63 7.11 11.03ZM211.38 413.08c0 4.53 4.06 4.77 6.09 2.73 2.95-2.95 4.58-7.23 6.76-10.94l-10.9-.14c-.69 2.78-1.97 5.58-1.95 8.35Zm89.23 5c.3.53 4.43 0 5-1 2.22-3.85 3.69-8.13 5.45-12.24-1.66 1.15-3.18 2.78-5 3.35-2.78.86-5.79 1-8.71 1.4 1.02 2.88 1.77 5.9 3.26 8.5Zm-10.64-117.5c.87-.92 2.42-1.79 2.5-2.78.83-10.51 1.42-21 2.08-31.57l-4.58 34.35Zm103.89 100.07a6.2 6.2 0 0 0 4.24 2.67c1 .09 2.4-1.64 3.36-2.77a20.67 20.67 0 0 0 2-3.41l-11.71-3.49c.62 2.35.93 4.92 2.11 7Zm-99.1-137c.8-7.08 1.83-14.16 2.26-21.27.12-2-1.49-4.18-2.31-6.28l.04 27.54Zm-87.82 99.66a21.36 21.36 0 0 1 4.29-.91c-1-1.93-1.63-5.11-3.06-5.52-2.24-.65-5 .57-7.58 1l2.67 8a23 23 0 0 1 3.68-2.57Zm105-57.67c.46-.6 2.28-.15 3.48-.18l1.71-4.13c.2-2.09.39-4.18.59-6.26q-6.64 10.69-13.3 21.39c2.44-3.64 4.83-7.35 7.52-10.82Zm-122.93-11.92c.63-.59 1.69-1.1 1.83-1.8 1.74-8.77 3.35-17.56 5-26.34q-3.41 14.07-6.83 28.14ZM208.38 273c-.69 2.3-1.69 4.56-1.89 6.9-.08.9 1.68 2 2.61 2.94 1.54-1.56 4-3 4.32-4.73.25-1.57-2-3.52-3.1-5.31Zm-40.71 43.24 248.24 85.34c1.45-.66 1.54-4.28 2.25-6.55l-12 2.59c2.18 4.05 5.7 5.8 9.75 3.96Zm146.73 4.45-2.13 27Zm-64.59-22c1.83.1 3.62.95 5.42 1.48-.66-1.95-1.36-3.9-2-5.87a17.58 17.58 0 0 1-.41-2.41q-3.51 4.08-7 8.17c1.33-.49 2.69-1.43 4.04-1.36Zm-32.83 81-4.49-11.19c-1.29.92-2.55 1.87-3.87 2.74a17.71 17.71 0 0 1-2.15 1l9.08 7.33Zm103.53 31.44 7.44-4.51-11.43-5.8Zm-64.43-79.79c.88.34 2.93-.28 3.21-1a3.82 3.82 0 0 0-.69-3.54c-1.39-1.25-3.32-1.9-5-2.8-1.31 2.35-3 4.57-3.76 7.08-.35 1.16 1.09 2.87 1.71 4.33.13-2.78.08-5.71 4.53-4.02Zm-32.45-77.53c-2-.72-3.94-1.77-6-2-.74-.09-2.62 2.24-2.44 2.55a15.8 15.8 0 0 0 3.77 4.22c.28.23 1.72-1 2.63-1.55Zm-22.48 51.86a60.65 60.65 0 0 0 5.44 5.8c1-1 3-2.48 2.81-3-1-2.26-2.56-4.24-4.72-7.52-1.98 2.6-3.76 4.42-3.53 4.72Zm183.88-178.36c2-.31 4.19.3 6.3.51l1.76-3.16a17 17 0 0 0-4.06-.56 27.59 27.59 0 0 0-7.67 1.47c-.85.34-.87 2.71-1.27 4.15 1.64-.84 3.21-2.15 4.94-2.41ZM265.86 396.73c4.89-2.48 5.86-8.19 2.4-14.24Zm143.78-259.57c-1.82-5-9.73-9.36-16.61-9.17ZM186.4 340.5q-.3-9.56-.61-19.14.31 9.57.61 19.14Zm68.46-26.6c0-2.57-1.2-5.15-1.88-7.74-.44 3.57-1.06 7.14-1.24 10.72-.08 1.64.7 3.32 1.08 5 .73-2.68 2.04-5.32 2.04-7.98Zm37.18-76.59-9.28 13.67Zm-14.9 85.22v-17.17q-.02 8.56 0 17.13Zm-88.76-21q-1.08 5.51-2.17 11 1.08-5.52 2.17-11.02Zm86.59-38.5 6.66-9.57Zm-84.28 97.92c-.64-2.82-1.27-5.65-1.91-8.47l1.91 8.45Zm118.32 2.91-4.15 7.92Zm-90.79-134.29c-4.57 1.76-5.23 5.37-4.53 9.62Zm58.91 108.1q-.76 4.42-1.55 8.86.78-4.43 1.55-8.86Zm34.47 13c-.47 2.69-.94 5.39-1.41 8.07Zm-7.26 22.14-4.18 5.93Zm-76.48-151c-2.2.66-5.92-2.46-6.38 2.55Zm49.79 75c.51-1.85 1-3.69 1.54-5.54q-.75 2.8-1.51 5.56Zm-42.21-77.6 6.79.11Zm-44.52 144.47q.3 4 .62 7.94c-.21-2.65-.41-5.31-.62-7.94Zm13.3-126.82c.28-1.26.55-2.53.83-3.79l-3.64 2Zm-17.61 106.67 1.86 5Zm90.36 33.16-1.56-4.84Zm6.85 2.74-5.27-.18Zm14.13 2.07-4.09-1.19Zm-22.86-14Zm-15.13 26.81 3 2Zm-29.54-173 2.82-1.76Zm-25.74 159-4 1.44Zm70.4-19.74c0-1 0-1.94-.05-2.91.02.91.03 1.87.05 2.84Zm-11.49-82.43 2.2-2.93ZM411.05 138l2.19 2.35ZM257.33 285.44l-1.74 2.39Zm57.12 27.95.24-1.94Zm-35.37-30.48c-.37-.52-.73-1.05-1.1-1.56Zm-82.6-26.37.42-2.07Zm84.85 30.33-.93-1c0 .55.07 1.11.1 1.66Zm-67.94-47.38-2.62 1.55Zm80.9-3.81-1.15-1.11c-.27.7-.55 1.41-.82 2.12Zm-24.66 34.68-1.25 1.19Zm2.23-3.05-1.26 1.35Zm-63.9 111.89c-.21-.47-.43-.94-.65-1.41l-.59 1.36Zm51-96.09 1.09-1.6Zm-60.1-32.49c-.22.43-.45.85-.67 1.27.18-.42.4-.85.67-1.27Zm116.28 149.52-1.1-.54-.47 1.64ZM96.43 220.97l1.94.2Zm171.91 111.34v1.32c-.01-.44 0-.87 0-1.32Zm-47.93-105.6-1.41 1.5Zm20.6-1 1-1.17c-.32.44-.65.83-1 1.22Zm12.63 65.16a.47.47 0 0 0-.54.54ZM142.26 394.06l.65-.36-.63-.8c0 .41-.01.78-.02 1.16Zm194.4-194.75c1.15-4.32 3.21-8.39 4.89-12.56l4.36 2.47 2.59-4.76c1.17 1.53 2.84 2.9 3.41 4.64 2.64 7.92 4.64 16.06 7.52 23.88 1.86 5.07 4.92 6.45 7.78.28.16-.34 1.08-.34 1.64-.49l.06-4.28c-4-2.12-7.25-13.12-4.93-16.55a6 6 0 0 1 1.18-1.06c.32.56.7 1.09 1 1.68.88 1.89 1.72 3.8 2.57 5.7-.85-5-1.63-9.92-2.64-14.84-.12-.58-1.49-.91-2.29-1.35l-.55 1.37c-2.69-3.46-6.19-6.59-7.76-10.5-.87-2.17 1.46-5.64 2.42-8.49 0-.12.92 0 1.41.08l-.6-4.37c-2.55-3.88-5.54-7.56-7.47-11.72-1.45-3.13-2.41-6.6-6.4-4.58-3.33 1.68-7.28 4.12-4.73 9.29 2.34 4.75 4.82 9.43 6.84 14.31.35.86-1.23 3.63-2 3.67-5.27.25-5.41 2.85-4.37 7.09.45 1.8-.88 5.79-1.55 5.83-4.58.23-7.89 1.29-8.07 6.66 0 .38-.9 1.07-1.36 1.05-5.28-.2-7.8 2.28-8.36 7.53-.44 4.22-1.75 8.34-2.26 12.55-.08.68 1.93 2.08 3.15 2.32s2.92-.39 4.39-.64a47.39 47.39 0 0 1-.71 6.21c-1.22 5.07-2.88 10-3.89 15.17-.25 1.27 1.32 2.9 2.05 4.37 1-.92 2.51-1.66 3-2.8 1.32-3.37 2.09-6.95 3.32-10.35 2.43-6.71 5-13.36 7.54-20-.5-2.32-1.72-4.81-1.18-6.81Zm-126.33-23.35c-6.44 2.41-12.12 6.91-18 10.66-1.54 1-2.69 2.59-4 3.91-.15 5-.32 10-.43 15a30.16 30.16 0 0 0 .24 3.14 18.21 18.21 0 0 0 3-1.17c1-.58 1.65-1.78 2.66-2.1s2.24.12 3.38.23a13.9 13.9 0 0 1-1.35 2.46c-2.53 3-5.1 6.05-7.78 9a11.42 11.42 0 0 1-2.86 1.71 8.88 8.88 0 0 1-1-2.6c-.24-5.2-3.27-7.06-7.81-3.67-4.27 3.19-7.68 7.63-11.07 11.85-.8 1 0 3.27.05 5 1.41-.4 3-.49 4.18-1.26 2.44-1.64 4.49-3.9 7-5.4 2.05-1.23 5.31-4.35 5.73 1.65 0 .25 3.44 1 4.67.3 5.24-2.76 10-6.62 15.42-8.81 7.67-3.09 15.77-5.11 23.75-7.35.53-.15 1.63 1.77 2.47 2.72l17.39-3.75c.94-.33 1.86-.72 2.82-1 3.82-1 4.44-3.64 3.23-6.78-.14-.36-3.25.55-5 .65-1.55.08-3.5.38-4.59-.39s-1.66-2.82-2.45-4.3a46.88 46.88 0 0 1-4.47 4.55c-2.15 1.68-3.08 9.31-7.58 1.81a3.16 3.16 0 0 0-3-.67c-5.8 3.09-7.48-1.5-8.72-5.14s-3.59-3.78-5.35-1.72c-4.12 4.82-6.65-1.81-10.06-.87 1.5-1.92 2.72-4.21 4.58-5.66 2.09-1.64 4.85-2.37 7.14-3.78 1.86-1.15 4.61-2.48 5-4.14 1.1-5.26 4.75-5.44 8.78-5.86 1.57-.17 3-1.3 4.56-2-6.9 1.13-14.13 1.38-20.53 3.78Zm38.19 53.35c-.94 3-1.86 6-2.9 9-.08.22-1.12.1-1.71.15a6.79 6.79 0 0 1 0-1.86c.48-1.49 1.09-2.93 1.65-4.4-2.09 3.85-4 7.82-6.32 11.51-3.77 6-8.41 11.49-7.62 19.23 1.53-1.23 4.05-3.79 4.43-3.5 2.61 2 4.7 4.62 7.11 6.88 1.65 1.55 4.27 4.36 5.21 3.92a14.65 14.65 0 0 0 6.62-6c1.81-3.55 2-7.94 3.59-11.62 2.11-4.75-1-4.78-3.57-4-4.23 1.32-4.63-1.06-3.68-3.62a119 119 0 0 1 7.57-16.94c2.06-3.65 5.59-6.44 8.05-9.9 1-1.44 1.85-4 1.23-5.39a7.24 7.24 0 0 0-4.85-3.6c-1.38-.22-3.24 1.55-4.62 2.74-1.85 1.59-3.44 3.47-5.15 5.22q-2.5 6.12-5.04 12.18Zm117.24-86.11c2 .5 4 1.35 5.93 2.05l5.65-3.54c-6.38-5.65-11.06-12.18-11.12-21.15a17.06 17.06 0 0 1-2.58-1.91c-6.23-6.56-6.18-6.55-11.93.76-.64.82-2.25.9-2.83 1.73-2.11 3-6.36 7.9-5.55 9 4.34 6 10 11.15 15.14 16.58.73-4.63 3.96-4.34 7.29-3.52ZM211.28 86.9c4.82-2 9.75-5.81 14.43-5.54 6.44.38 12.69 3.88 19 6 2.29.77 5.6 2.72 6.76 1.86 2.81-2.1 4.63-5.52 6.85-8.41-2.57-1.58-5.08-4.37-7.74-4.51-9.68-.53-19.62 2.41-28.6-4.5-1.74-1.33-6.75.51-9.62 2.06-2.64 1.42-4.42 4.42-6.58 6.73q2.78 3.14 5.5 6.31Zm-79 75.5a13.63 13.63 0 0 0 5 1.34c2.23 0 4.44-.83 6.65-1.29l6.51-1.34c-3.74-4.37-.19-6.78 2.72-9 .86-.66 3.76-.37 4.11.31 2.9 5.72 5.22 2.42 7.54-.31a41.17 41.17 0 0 0 3.74-5.17 17.82 17.82 0 0 0 2.22-4.92c.1-.43-2-2.05-2.45-1.83a14.6 14.6 0 0 0-4.86 3.32c-2.58 2.89-4.67 6.77-8.54 1.32-.48-.67-2.58-1.18-2.93-.81-4.6 4.82-10.69 2.27-16 3.43-1.37 4.98-2.71 9.93-3.74 14.95Zm27.17-87.43 4.35 8.23 6.36-.53-2-4.14c7.11-3.16 14-7.09 21.4-9.24 6-1.74 12.69-1.26 19-2 1.22-.14 2.32-1.32 3.48-2-.84-.67-1.69-1.92-2.51-1.9-10.57.3-21.45-3.47-31.63 2.63-2.13 1.28-5.85 4-6.76-1.72-4.65 2.74-10.69 3.95-11.72 10.67Zm62 48c-1.5 2.69-3.34 5.26-4.42 8.11-2.08 5.45-3.8 11-5.49 16.63a4.9 4.9 0 0 0 .61 3 11.79 11.79 0 0 0 4.58-.89c1.53-.74 2.72-2.16 4.18-3.09 3.5-2.23 7.58-3.84 10.51-6.65 4.29-4.1 2.38-7.46-2.45-10-1-.51-1-2.71-1.53-4.13Zm82.3 77.42c1.94 12.19 4.14 24.35 5.62 36.6.37 3.05-1.85 6.35-2.39 9.62-.23 1.41.79 3 1.24 4.56 1.35-1 3.52-1.76 3.92-3.06 1.83-6 3.19-12.14 4.68-18.24 2.68-11-3.57-20.5-5.19-30.78Zm55-124.82c-.7-.78-1.32-2.13-2.13-2.26-7-1.13-14-2.26-21-2.92-5.35-.51-14.86 7.84-15.49 13.22 0 .28 1.45 1.13 2.15 1 7-.8 14-1.8 21-2.56.93-.09 2 .88 3 1.36ZM227.26 52.41c-9.11-1.36-18.31-2.24-27.5-2.95-1.7-.13-3.52 1.44-5.28 2.22 4.37-.41 8.75-.84 13.13-1.19a9.7 9.7 0 0 1 2.23.33 10.18 10.18 0 0 1-.6 2.31c-.93 1.8-2 3.53-3 5.29 2.31-.35 4.63-.68 6.93-1.06 6.1-1 12.19-2.07 18.3-3 .62-.09 1.39.74 2.09 1.15-.5.29-1 .56-1.5.87-1.11.67-2.21 1.36-3.31 2 .94 1.28 1.64 2.88 2.86 3.79 3.91 2.94 8 5.6 12.05 8.4 1.16.81 3.06 2.61 3.25 2.45a19.62 19.62 0 0 0 4.32-5.23c.29-.57-1.22-2.56-2.31-3.24-1.87-1.14-4.34-1.39-6-2.7-2-1.54-3.42-3.8-5.09-5.74-3.54-1.23-6.97-3.16-10.57-3.7Zm28.45 14.27c-1.08 1.72-6.36 2.11-2 5.55 2.45 1.91 5.36 3.2 7.95 4.93 3.44 2.31 7.13 4.5 3.74 9.69-.7 1.07-.22 4.36.11 4.42 4.36.78 8.79 1.16 13.21 1.64-.69-3.18-1.24-6.41-2.12-9.54-.39-1.38-2.42-3.32-2.08-3.74 3.88-5 0-5.58-3.42-7-2.73-1.18-7.53-.34-6.85-5.73-2.82-.1-5.68-.17-8.54-.22Zm58.65 220.71c-3.77-1.39-6.52-3.08-4.57-8a89.59 89.59 0 0 0 3.9-13.6c.22-1-1.21-2.45-2.1-3.5-.14-.16-2 .53-2.16 1.07-1.66 6.53-3.32 13.07-4.62 19.67-.62 3.1.46 6.84-.9 9.41-2.07 3.93-1.91 6.73 1.17 9.62q4.64-7.35 9.28-14.67ZM197.15 95.31c-7.19 2.37-14.23 5.19-21.25 8-1.18.47-2 1.87-3 2.84-.2.64-.4 1.29-.61 1.93l-.09.14-2.27 7.09c2.39-1 5.17-1.45 7.1-3 3.7-2.95 6.82-6.61 10.38-9.74a4.53 4.53 0 0 1 3.8-.93c7.78 3.09 10.62 1.84 12.66-6-2.25-.13-4.74-1.02-6.72-.33Zm18.23 15.54c-2.13-.77-4.24-2.05-6.4-2.16-1.85-.1-5.45 1.48-5.39 1.76 1.19 6.22-4.11 9.26-6.36 13.72-.54 1.07-.45 2.47-.65 3.71 1.13-.27 2.27-.53 3.4-.83a54.53 54.53 0 0 0 6.9-1.94c1.54-.63 3.88-1.78 4-2.92.58-4.89 3.49-5.43 7.38-4.86q-1.4-3.28-2.88-6.52Zm30.76 177.61a33.64 33.64 0 0 1-3.13-4.07 34.78 34.78 0 0 1-1.9-4.9c-1.92.89-4.46 1.29-5.62 2.77-2 2.55-3.27 5.7-4.58 8.72-1.86 4.27.41 6.9 5.18 6.54.92-.06 1.93 1.1 2.89 1.7q3.59-5.43 7.16-10.8Zm-4.79-111.63c-3.89.75-8.21.7-11.54 2.49s-6.07 5.32-8.6 8.45c-.67.83.36 3 .61 4.61 3.33-1.32 6.65-2.65 10-3.94 4.41-1.7 8.82-3.36 13.23-5Zm111.73 51.74c0 3.37 2.32 7-4 8.43-3.78.84-3 7.5 1.38 8.06 6.44.84 5.76 5.43 6.93 9.31.41 1.37.69 2.78 1 4.18.36-10.41-.4-20.58-5.31-30.02Zm45.09-109.28.45-1.85c-2.47-7.49-10.11-8.55-15.46-12.46l-5.25 8.66ZM183.94 237.11c1.86-3.65 4.27-2.68 6.16-4.12-6.08-3.66-21.75 2.61-22.79 9.15a2.29 2.29 0 0 0 .29 1.31c.85 1.65 1.76 3.27 2.64 4.9 4.76-3.65 11.24-6.42 13.7-11.24Zm116.64 18.92c-.28 6-.25 12-.36 18.08.92-6.27 2.37-12.54 2.63-18.85.29-6.93-.51-13.9-.84-20.85-.49 7.21-1.09 14.41-1.43 21.62Zm-1 25.58q-1.11 8.38-2.24 16.78 1.13-8.4 2.24-16.78Zm-.94-60.93c-2.22-1.18-4.36-3-6.69-3.28-1.3-.17-2.91 2.22-4.38 3.45 3.64-2.96 7.29-2.98 11.07-.17Zm62.45 66q-.76 4.94-1.55 9.9.78-4.99 1.55-9.94Zm-1.53-16 1.44 8.8Zm-59.77-48.86 2 7.06Zm70.81-111-4.4-1.48-.09 5.28Zm-.14 122.82c.1 2.36.21 4.72.31 7.08-.1-2.41-.21-4.79-.31-7.16Zm-83.31-10.33-2.24 5.31Zm81.92 74.88 2.58-6.68Zm-72.4 7.42.27-5.22q-.13 2.62-.27 5.25Zm67-127.44c-.58-1.24-1.17-2.47-1.75-3.7.56 1.27 1.15 2.5 1.73 3.73Zm8.78 112.22c.26-.69.53-1.39.79-2.1ZM172.33 108.06c.15-.62.3-1.25.44-1.87l-2.47 1.84 1.94.17ZM369.6 217.38l-.59.63 1 .68c-.15-.44-.27-.87-.41-1.31Zm-10.06 86.08.37 1.36c-.12-.45-.24-.9-.37-1.36Zm11-192.73 2.49 1.89Zm-86.3 120.19-.87 1.62Zm-37.93.45 2.21-2.11Zm163.71 101.47-1.44-1.91Zm-48.4-161.25-.3-.06v.08Zm-204.54-34.6a16.76 16.76 0 0 1 3.42-2.44c1.45-.56 4.32-1.16 4.5-.77 3.79 8 4.66.61 6.33-1.2 3.85-4.16 7.39-8.64 11.47-12.56.83-.79 3.78-.08 5.28.77 1.32.74 2 2.64 2.92 4 .47-1.7 1-3.4 1.42-5.1a7.43 7.43 0 0 0 .62-2.87c-.32-1.85-.47-4.39-1.68-5.26s-4.41-1.18-5.64-.27c-3.84 2.85-7.06 6.52-10.76 9.58-1.42 1.17-4.88 2.44-5 2.16-3.05-4.79-7.11-3-9.93-.8s-4.21 5.8-6.25 8.8Zm117.08 101.42c3-4.72 5.11-10.08 7.51-15.21 1.18-2.53 2.54-5.09 3-7.78.2-1.11-1.48-3.08-2.77-3.76s-4-1-4.72-.22a43.78 43.78 0 0 0-6.38 9.23c-2.37 4.63-4.14 9.56-6.24 14.32-1.17 2.65-2.9 5.12-3.6 7.87-.34 1.35 1.11 3.15 2.61 6.93 4.57-4.8 8.21-7.68 10.59-11.38Zm-70.77-97.59a19 19 0 0 0-3.8 1.53c-1.59.73-3.15 1.51-4.73 2.27-.33-1.47-.28-3.22-1.1-4.34s-3.33-2.82-3.8-2.48c-5.16 3.74-10.12 7.77-15 11.88a3.28 3.28 0 0 0-.88 3 3.13 3.13 0 0 0 2.91 1 52 52 0 0 0 7-3.71c1.79-1.06 3.47-2.32 5.2-3.49.54 1.45 1 2.94 1.65 4.32.32.64 1.37 1.61 1.59 1.49 4.38-2.33 8.68-4.81 13.25-7.39-1.45-2.59-2.04-4.13-2.29-4.08Zm-9.43 5.9-.53-.32c.11-.11.23-.31.34-.31s.24.19.36.3Zm137.15 149.71c-1.36 0-2.68 1.77-4 2.76 1.35 1.48 2.52 3.26 4.17 4.26.49.3 2.3-1.58 4.62-3.27-2.32-1.87-3.57-3.77-4.79-3.75Zm-.71 35.32c.94 1.66 2.79 2.8 4.28 4.15.79-1.21 2.41-2.64 2.17-3.6-.41-1.63-2-3-3.6-5.14-1.39 2.15-3.19 3.97-2.85 4.59Zm2.16 34.05c-1.15-1.78-3.13-3-4.79-4.49-.67 1.13-2 2.39-1.86 3.37.33 1.79 1.57 3.41 3.1 6.42 1.9-2.74 3.85-4.79 3.55-5.3Zm75.3-41.67c-1.13-.18-2.37-.74-3.37-.45a58.51 58.51 0 0 0-6.36 2.54c1.16 2 1.9 5 3.61 5.7s4.41-.72 6.67-1.22c-.18-2.19-.37-4.39-.55-6.57Zm-8.59 22.46c-.29-.27-2.57 1.67-5.19 3.45l5.29 5.64c1.27-1.31 3.73-2.83 3.55-3.89-.34-1.94-2.06-3.79-3.65-5.2Zm0-47.79-3.91-3.32c-.72 1-2.24 2.33-2 3 .57 1.58 2 2.85 3.06 4.24.74-1.03 1.49-2.08 2.82-3.92Z'
        fill='#b13d3a'
      />
      <path
        d='M119.15 380.99c3.57-13.25 11.89-21.29 25.55-23.93 1.26-.24 2.83-3.5 2.74-5.27-.57-10.76-1.5-21.5-2.46-32.23-1.28-14.36 2.27-26.79 13.83-36.27 3.4-2.79 6.17-6.59 9.94-8.59 2.79-1.48 7.37-2.05 10-.72 2.44 1.25 3.46 5.47 4.79 8.52.32.72-.42 2.7-1 2.86a4 4 0 0 1-3.39-.78c-2.69-3-4.77-1.89-7.65 0-14.19 9.31-18.77 22.73-17.25 38.9 1.13 11.89 2.19 23.78 3.58 35.63 1 8.87-1.66 11.64-10.24 10.72-2.68-.29-5.73 1-8.3 2.22-1.54.73-2.51 2.69-3.62 4.19-.09.14.9 1.46 1.15 1.39a27.37 27.37 0 0 0 5.24-1.92c2.09-1.1 3.87-3 6.05-3.65 5.09-1.43 6.93 1.23 6.57 6.11a16.24 16.24 0 0 0 .62 3.92c1.56-.35 3.81-.16 4.56-1.13 3.29-4.27 7.56-8.52 8.77-13.44 1.3-5.28 5.11-5.1 8.24-6.4.93-.38 4.39 2.14 4.28 3-.51 3.77-.94 8.2-3.17 10.95-4.93 6.05-10.93 11.23-16.49 16.77-6 1.54-12.06 3.1-18.12 4.51a12.72 12.72 0 0 1-1.05-2.37v.07l.65-.36-.63-.8-1.14-5.72c-7.76-.71-15.84-.12-22.05-6.18Z'
        fill='white'
      />
      <path
        d='M120.54 381.05c6.2 6.05 14.28 5.47 22 6.19-7.36.58-13.95 2-19.28 8.32-2.35 2.79-7.72 4.05-11.76 4.13-5.28.11-5.82-4.74-3.36-7.79 3.38-4.21 8.19-7.29 12.4-10.85Zm21.2 15.76c-.53 2.72-1.44 5.77-.63 8.16.36 1 5.45 2 6.76 1 5.33-4.25 10-9.29 15-14-6 1.54-12.06 3.1-18.12 4.52a12.92 12.92 0 0 1-1-2.38c-.75.85-1.82 1.69-2.01 2.7Zm22.56-48.58a75.5 75.5 0 0 0 5.36 6.19c.15.14 3.47-2.35 3.33-2.64a52.15 52.15 0 0 0-4.43-6.61Zm4.75-31.92c-1-.21-3.39 2.24-3.8 3.85s.69 3.83 1.14 5.77l5.84-.1c.43-1.85 1.63-4 1.1-5.49a6.93 6.93 0 0 0-4.28-4'
        fill='#b13d3a'
      />
      <g>
        <path
          d='M148.69 235.85a3.16 3.16 0 0 1-.77-1.23c-1.59-9-9.36-12.91-15.11-18.48l-39.87-6.34c-25.2.44-46.87-7.33-63.4-27.15-15.76-18.9-20-39.61-10.1-62.67 5.3-12.3 18.27-18.7 30.78-13.67s20.34 14.93 22.64 28.56c.88 5.19-4.35 11.75-9.09 10.4-5.21-1.49-9.9-5-14.62-7.92-1.09-.69-1.35-2.7-2-4.11 1.36-.08 2.86.18 4.06-.31 2.41-1 5.07-2 6.77-3.76.8-.83.23-4.13-.84-5.31a20.22 20.22 0 0 0-6.87-4.7c-5.4-2.34-9.74.76-11.76 6.12-3.68 9.78.43 17.21 6.4 23.91a21.49 21.49 0 0 0 27.73 3.61c11.38-7.23 12.52-17.4 10.65-29.06a87.38 87.38 0 0 1-7.61-5.52c-3.71-3.32-6.88-7.27-10.76-10.35a79.56 79.56 0 0 0-14.4-9.56c-10.36-5-25.94 2-33.06 10.89-9.5 11.87-6.8 25.92-9.57 38.88-1.1 5.15 2.91 11.25 4 17 2.9 15 13.08 25.32 23.23 35.15C47.6 212.31 64 216.91 80.78 219.81c3.19.55 6.46.59 9.7.87l6.85.38 1.93.21c7.17 1 14.37 1.87 21.5 3.13a45.05 45.05 0 0 1 10.36 3.13c2.52 1.13 4.69 3.11 6.92 4.84 3.5 2.72.31 11.08 8.21 10.15.41-1.13 1.07-2.17 1.39-3.34.18-.65.36-1.3.56-1.94a5.66 5.66 0 0 1 .46-1.35Z'
          fill='white'
        />
        <path
          d='M83.47 123.41a88.82 88.82 0 0 1-7.61-5.51c-3.7-3.32-6.87-7.28-10.75-10.35a79.11 79.11 0 0 0-14.41-9.54c-10.35-5-25.93 2-33.05 10.88-9.5 11.88-6.8 25.93-9.57 38.89-1.1 5.14 2.91 11.24 4 17 2.9 15 13.08 25.33 23.23 35.16 12.47 12.08 28.88 16.68 45.65 19.57 3.19.55 6.47.6 9.71.88-6.72.05-13.54.9-20.13 0-21.82-3-38.7-16.24-54.84-29.46-6.4-5.24-10.24-15.24-12.3-23.79-3.47-14.42-5.48-29.72-.21-44.07 3.09-8.43 7.6-18.31 14.54-22.91 10.35-6.85 21.91-15.18 35.88-11.85s23.57 12 27.48 26.21c.77 2.99 1.59 5.94 2.38 8.89ZM132.43 216.18l-39.87-6.34c9.94-5.94 19.7-3.11 29.31.83 3.66 1.5 7.05 3.64 10.56 5.51Z'
          fill='#b13d3a'
        />
      </g>
    </motion.svg>
  )
}

export default LittleBeast
