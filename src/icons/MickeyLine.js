import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMickeyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.617 10.913A4.501 4.501 0 015.5 2a4.5 4.5 0 014.493 4.254A8.014 8.014 0 0112 6c.693 0 1.365.088 2.007.254a4.5 4.5 0 115.376 4.66 8 8 0 11-14.766 0zM3 6.5a2.5 2.5 0 002.766 2.486 8.04 8.04 0 012.158-1.871A2.5 2.5 0 103 6.5zm15.234 2.486a2.5 2.5 0 10-2.158-1.871 8.039 8.039 0 012.158 1.871zM6 14a6 6 0 1012 0 6 6 0 00-12 0z" />
    </Svg>
  );
}

export default SvgMickeyLine;
