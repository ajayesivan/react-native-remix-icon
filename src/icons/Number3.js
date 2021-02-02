import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNumber3(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2v1.362L12.809 9.55a6.501 6.501 0 11-7.116 8.028l1.94-.486A4.502 4.502 0 0016.5 16a4.5 4.5 0 00-6.505-4.03l-.228.122-.69-1.207L14.855 4H6.5V2H18z" />
    </Svg>
  );
}

export default SvgNumber3;
