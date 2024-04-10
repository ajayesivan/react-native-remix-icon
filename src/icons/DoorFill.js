import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.998 3a1 1 0 011 1v16a1 1 0 01-1 1h-12a1 1 0 01-1-1V4a1 1 0 011-1h12zm-4 8a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgDoorFill;
