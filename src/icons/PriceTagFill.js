import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPriceTagFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 7l8.445-5.63a1 1 0 011.11 0L21 7v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm9 4a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgPriceTagFill;
