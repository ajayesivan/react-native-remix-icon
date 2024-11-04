import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorLockBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6 7.792a2.5 2.5 0 112 0V16h-2v-3.208z" />
    </Svg>
  );
}

export default SvgDoorLockBoxLine;
