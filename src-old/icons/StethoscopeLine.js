import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStethoscopeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3a1 1 0 011 1v5a6.002 6.002 0 01-5 5.917V16.5a3.5 3.5 0 006.775 1.237 3 3 0 112.049.148A5.5 5.5 0 019 16.5v-1.583A6.001 6.001 0 014 9V4a1 1 0 011-1h3zm11 11a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgStethoscopeLine;
