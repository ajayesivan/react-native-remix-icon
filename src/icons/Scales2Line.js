import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 01-3 3h-4l.001 2.062A8.001 8.001 0 0119.998 15v6a1 1 0 01-1 1h-14a1 1 0 01-1-1v-6a8.001 8.001 0 017-7.938V5h-4c-1.66 0-3-1.34-3-3h2zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6zm0 2c.742 0 1.437.202 2.032.554l-2.74 2.739a1 1 0 001.32 1.497l.095-.083 2.74-2.739A4 4 0 1111.998 11z" />
    </Svg>
  );
}

export default SvgScales2Line;
