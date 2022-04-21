import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 01-3 3h-4l.001 2.062A8.002 8.002 0 0120 15v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a8.001 8.001 0 017-7.938V5H7C5.34 5 4 3.66 4 2h2zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6zm0 2c.742 0 1.436.202 2.032.554l-2.74 2.739a1 1 0 001.32 1.497l.095-.083 2.74-2.739A3.999 3.999 0 0112 19c-2.21 0-4-1.79-4-4s1.79-4 4-4z" />
    </Svg>
  );
}

export default SvgScales2Line;
