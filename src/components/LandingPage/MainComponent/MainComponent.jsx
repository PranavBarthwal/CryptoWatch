import React from 'react'
import './styles.css'
import Button from '../../Common/Button/Button'
import iPhone from '../../../assets/iPhone.png'
import gradient from '../../../assets/gradient.png'
import {motion} from "framer-motion"

function MainComponent() {
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='track-crypto-heading mb-0 mt-0 p-0'>
                    Track Crypto
                </motion.h1>
                <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='real-time-heading mb-0 mt-0 p-0'>
                    Real Time.
                </motion.h1>
                <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className='info-text'> 
                Track crypto through a public API in real time. Visit the dashboard for more!
                </motion.p>

                <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="btn-flex">
                    <Button text={"Dashboard"} outlined={false}  />
                    <Button text={"Share"} outlined={true} />
                </motion.div>
            </div>

            <div className="gradient-div">
                <motion.img 
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }}
                src={iPhone} 
                className='iphone' 
                />
                <motion.img src={gradient} className='gradient'/>
            </div>
        </div>

    )
}

export default MainComponent
