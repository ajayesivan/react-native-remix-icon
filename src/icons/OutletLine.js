import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOutletLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm2-10h2v4h-2v-4zm-6 0h2v4H8v-4z" />
    </Svg>
  );
}

export default SvgOutletLine;
