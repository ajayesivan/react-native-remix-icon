import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutVerticalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 19h14V5H5v14zM3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm12 3v10h2V7h-2zm-4 0v10h2V7h-2zM7 17V7h2v10H7z" />
    </Svg>
  );
}

export default SvgLayoutVerticalLine;
