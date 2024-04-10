import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFridgeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.998 12v10a1 1 0 01-1 1h-14a1 1 0 01-1-1V12h16zm-11 2h-2v5h2v-5zm10-13a1 1 0 011 1v8h-16V2a1 1 0 011-1h14zm-10 3h-2v4h2V4z" />
    </Svg>
  );
}

export default SvgFridgeFill;
