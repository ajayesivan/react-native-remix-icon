import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailVolumeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 14.5v9L16.667 21H14v-4h2.667L20 14.5zM21 3a1 1 0 011 1v10.529A6 6 0 0012.34 21H3.002a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 14a2 2 0 01.15 3.995L21 21v-4zM5.647 6.238L4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438-6.413-5.444z" />
    </Svg>
  );
}

export default SvgMailVolumeFill;
