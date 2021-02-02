import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAlignJustify(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
    </Svg>
  );
}

export default SvgAlignJustify;
