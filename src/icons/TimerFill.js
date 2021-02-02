import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTimerFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-1.414-1.414zM11 8v6h2V8h-2zM8 1h8v2H8V1z" />
    </Svg>
  );
}

export default SvgTimerFill;
