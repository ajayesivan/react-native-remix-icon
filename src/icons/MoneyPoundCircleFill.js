import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMoneyPoundCircleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-9v2H8v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 012.76-.815l1.986-.496A3.501 3.501 0 009 10v1H8v2h1z" />
    </Svg>
  );
}

export default SvgMoneyPoundCircleFill;
