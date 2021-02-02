import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLayoutGridFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 12.999V20a1 1 0 01-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 01-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 011-1h8zm10 0a1 1 0 011 1v6.999h-9V3h8z" />
    </Svg>
  );
}

export default SvgLayoutGridFill;
