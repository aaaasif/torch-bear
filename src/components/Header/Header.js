import React from 'react';
import BannerText from '../Top/BannerText.js';
import Nave from '../Top/Nave.js';
const Header = () => {
    return (
      <div className="banner">
        <Nave />
          <div className='banner_text'>
            <BannerText />
          </div>
      </div>
    );
};

export default Header;