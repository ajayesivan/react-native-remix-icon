import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSafeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 20H6v2H4v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v15a1 1 0 01-1 1h-1v2h-2v-2zm-7-6.126V17h2v-3.126A4.002 4.002 0 0012 6a4 4 0 00-1 7.874zM12 12a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgSafeFill;
