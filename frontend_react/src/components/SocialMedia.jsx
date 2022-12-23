import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://mobile.twitter.com/1BenAnsah" target="_blank"><BsTwitter /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/bernard-owusu-ansah-22a411219/" target="_blank"><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/1Bernard" target="_blank"><BsGithub /></a>
      </div>
    </div>
  )
}

export default SocialMedia