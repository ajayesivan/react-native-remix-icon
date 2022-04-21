import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 01-3 3h-4l.001 2.062A8.002 8.002 0 0120 15v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a8.001 8.001 0 017-7.938V5H7C5.34 5 4 3.66 4 2h2zm6 9c-2.21 0-4 1.79-4 4s1.79 4 4 4a3.999 3.999 0 003.446-6.032l-2.739 2.74-.094.082a1 1 0 01-1.32-1.497l2.739-2.74A4 4 0 0012 11z" />
    </Svg>
  );
}

export default SvgScales2Fill;
