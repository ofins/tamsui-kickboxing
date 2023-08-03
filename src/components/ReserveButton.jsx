import React from 'react'
import { motion } from 'framer-motion'

const ReserveButton = () => {
  return (
    <>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfgjn8p4RfOlfhaNTinpKmLXBLyaNjjYBWSC6zEm3eZ5_bZOg/viewform' target='_blank'><motion.button animate={{y:[0, 20, 0]}} transition={{type:"tween", duration:3, repeat: Infinity}} className='reserveBtn'>
        預約體驗
    </motion.button></a>
    
    <motion.a animate={{scale:[0.95, 1, 0.95]}} transition={{type:"tween", duration:3, repeat: Infinity}} className='classBtn' target='_blank' href="https://www.facebook.com/TamsuiKB">
      <p>課程表</p>
    </motion.a>
    </>
  )
}

export default ReserveButton