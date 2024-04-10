import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAedElectrodesLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-5v2H9v-2H4a1 1 0 01-1-1V8a1 1 0 011-1h3V4zm12 11V5H9v2h7a1 1 0 011 1v7h2zM5 9v10h10V9H5z" />
    </Svg>
  );
}

export default SvgAedElectrodesLine;
