import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWebcamLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 21v-1.07A7.002 7.002 0 015 13V8a7 7 0 1114 0v5a7.002 7.002 0 01-6 6.93V21h4v2H7v-2h4zm1-18a5 5 0 00-5 5v5a5 5 0 0010 0V8a5 5 0 00-5-5zm0 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgWebcamLine;
