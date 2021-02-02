import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRobotLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 4.055A9 9 0 0121 13v9H3v-9a9 9 0 018-8.945V1h2v3.055zM19 20v-7a7 7 0 00-14 0v7h14zm-7-2a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgRobotLine;
