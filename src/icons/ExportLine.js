import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExportLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 4a1 1 0 00-1-1H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4zM4 15h3.416a5.001 5.001 0 009.168 0H20v4H4v-4zM4 5h16v8h-5a3 3 0 11-6 0H4V5zm12 6h-3v3h-2v-3H8l4-4.5 4 4.5z" />
    </Svg>
  );
}

export default SvgExportLine;
