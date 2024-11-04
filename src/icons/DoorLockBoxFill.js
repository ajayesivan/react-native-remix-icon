import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorLockBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7 9.792V16h2v-3.208a2.5 2.5 0 10-2 0z" />
    </Svg>
  );
}

export default SvgDoorLockBoxFill;
