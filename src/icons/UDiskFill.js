import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUDiskFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 12h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1zM5 2h14v8H5V2zm4 3v2h2V5H9zm4 0v2h2V5h-2z" />
    </Svg>
  );
}

export default SvgUDiskFill;
