import React from 'react';
import logo from '../../assets/images/logo.png';

const Logo = (props) => {
  return (
    <span>
      <img
        src={logo}
        alt="Smiley face"
        style={{
          width: 'auto',
          height: '80%',
          marginLeft: '10px',
          userSelect: 'none',
        }}
      />
      <span style={{ marginLeft: '10px', userSelect: 'none' }}>
        All-in-one App
      </span>
    </span>
  );
};

export default Logo;
