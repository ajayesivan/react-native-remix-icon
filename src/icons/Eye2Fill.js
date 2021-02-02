import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEye2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5a5.01 5.01 0 00-1.473.22 2.5 2.5 0 11-3.306 3.307A5 5 0 1012 7z" />
    </Svg>
  );
}

export default SvgEye2Fill;
