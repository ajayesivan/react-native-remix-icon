import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStopMiniFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 7v10a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1z" />
    </Svg>
  );
}

export default SvgStopMiniFill;
