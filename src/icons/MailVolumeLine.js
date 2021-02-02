import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMailVolumeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 011 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 14a2 2 0 01.15 3.995L21 21v-4zM19.5 5H4.511l7.55 6.662L19.5 5z" />
    </Svg>
  );
}

export default SvgMailVolumeLine;
