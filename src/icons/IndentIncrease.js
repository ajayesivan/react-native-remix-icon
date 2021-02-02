import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIndentIncrease(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z" />
    </Svg>
  );
}

export default SvgIndentIncrease;
