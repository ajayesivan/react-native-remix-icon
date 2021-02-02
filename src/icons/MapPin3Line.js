import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapPin3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 19.945A9.001 9.001 0 0112 2a9 9 0 011 17.945V24h-2v-4.055zM12 18a7 7 0 100-14 7 7 0 000 14z" />
    </Svg>
  );
}

export default SvgMapPin3Line;
