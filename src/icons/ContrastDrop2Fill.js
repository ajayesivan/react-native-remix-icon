import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgContrastDrop2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 11-12.728 0zM12 3.101L7.05 8.05A6.978 6.978 0 005 13h14a6.978 6.978 0 00-2.05-4.95L12 3.1z" />
    </Svg>
  );
}

export default SvgContrastDrop2Fill;
