import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSubscript2(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 6v13H9V6H3V4h14v2h-6zm8.55 10.58a.8.8 0 10-1.32-.36l-1.154.33A2.001 2.001 0 0119 14a2 2 0 011.373 3.454L18.744 19H21v1h-4v-1l2.55-2.42z" />
    </Svg>
  );
}

export default SvgSubscript2;
