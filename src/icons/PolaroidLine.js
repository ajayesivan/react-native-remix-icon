import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPolaroidLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 6h-2V5H5v14h14v-1h2v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v2zM6 6h2v3H6V6zm9 10a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12zm0-4a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgPolaroidLine;
