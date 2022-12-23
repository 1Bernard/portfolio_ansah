import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { AiOutlineDownload } from 'react-icons/ai';

import './Header.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const [text, count] = useTypewriter({
    words: [
      'Software engineer',
      'Blockchain developer',
      '<Solving real world problems />'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Bernard</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>{text}</p>
            <Cursor />
          </div>
        </div>

        <div className="btn-con">
          <a href={images.BernardAnsahCV} download className="main-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon"><AiOutlineDownload /></span>
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.solidity, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="programing language" />
          </div>
        ))}
      </motion.div>
      
    </section>
  )
}

export default AppWrap(Header, 'home')