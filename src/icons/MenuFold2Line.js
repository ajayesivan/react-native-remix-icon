import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFold2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.403 3.903L2.99 5.318 6.171 8.5 2.99 11.68l1.414 1.415L9 8.5 4.403 3.903zM21 20v-2H3v2h18zm0-7v-2h-9v2h9zm0-7V4h-9v2h9z" />
    </Svg>
  );
}

export default SvgMenuFold2Line;
