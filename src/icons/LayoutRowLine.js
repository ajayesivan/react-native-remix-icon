import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutRowLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgLayoutRowLine;
