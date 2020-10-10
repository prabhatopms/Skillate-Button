import React from 'react';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as theme from '../../styles/theme.js';


//import each icon individually to reduce file size

import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';


//brand icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';



library.add(
  faEnvelope,
  faTwitter,
  faFacebook,
  faLinkedin,

);
dom.watch();

const getColor = color => {
  if (!color) return 'inherit';
  switch (color) {
    case 'red':
      return theme.colors.red;
    case 'green':
      return theme.colors.green;
    case 'blue':
      return theme.colors.defaultblue;
    case 'externalblue':
      return theme.colors.blue;
    case 'orange':
      return theme.colors.orange;
    case 'yellow':
      return theme.colors.yellow;
    case 'white':
      return theme.colors.white;
    case 'dark':
      return theme.fontColor.dark;
    case 'grey':
      return theme.fontColor.light;
    case 'lightgrey':
      return theme.fontColor.veryLight;
    default:
      return color;
  }
};

const FAIcon = ({
  className = '',
  name,
  size = '1x',
  color = 'inherit',
  cursor = 'inherit',
  fixedWidth = false,
  type = 'far',
  ...rest
}) => {
  let newColor = getColor(color);
  return (
    <FontAwesomeIcon
      icon={[type, name]}
      color={newColor}
      size={size}
      className={className}
      fixedWidth={fixedWidth}
    />
  );
};

export default FAIcon;
