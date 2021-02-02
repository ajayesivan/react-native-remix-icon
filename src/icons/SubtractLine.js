import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSubtractLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 11h14v2H5z" />
    </Svg>
  );
}

export default SvgSubtractLine;
