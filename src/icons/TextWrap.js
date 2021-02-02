import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTextWrap(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 18h1.5a2.5 2.5 0 100-5H3v-2h13.5a4.5 4.5 0 110 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z" />
    </Svg>
  );
}

export default SvgTextWrap;
