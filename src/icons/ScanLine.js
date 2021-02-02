import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgScanLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.671 4.257L13.414 12 12 13.414l-6.32-6.32a8 8 0 103.706-2.658L7.85 2.9A9.963 9.963 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 013.671-7.743z" />
    </Svg>
  );
}

export default SvgScanLine;
