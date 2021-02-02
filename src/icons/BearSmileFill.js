import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBearSmileFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.5 2a4.5 4.5 0 012.951 7.897A8.99 8.99 0 0121 13 9 9 0 113.55 9.897a4.5 4.5 0 116.791-5.744 9.05 9.05 0 013.32 0A4.494 4.494 0 0117.5 2zM10 13H8a4 4 0 007.995.2L16 13h-2a2 2 0 01-3.995.15L10 13z" />
    </Svg>
  );
}

export default SvgBearSmileFill;
