import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWindowLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 8H4v8h16v-8zm0-6H4v4h16V5zm-9 1v2H9V6h2zM7 6v2H5V6h2z" />
    </Svg>
  );
}

export default SvgWindowLine;
