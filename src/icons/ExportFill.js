import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExportFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zm-9 13a3 3 0 01-3-3H4V5h16v8h-5a3 3 0 01-3 3zm4-5h-3v3h-2v-3H8l4-4.5 4 4.5z" />
    </Svg>
  );
}

export default SvgExportFill;
