import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAedLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 5a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zM3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm13 5h-3V6l-5 7h3v5l5-7z" />
    </Svg>
  );
}

export default SvgAedLine;
