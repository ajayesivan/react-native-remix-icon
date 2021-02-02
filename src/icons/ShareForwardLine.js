import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShareForwardLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 14h-2a8.999 8.999 0 00-7.968 4.81A10.136 10.136 0 013 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 00-6.057 2.773A10.988 10.988 0 0111 12z" />
    </Svg>
  );
}

export default SvgShareForwardLine;
