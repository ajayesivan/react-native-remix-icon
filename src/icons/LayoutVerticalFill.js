import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutVerticalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm3 14V7h2v10H7zm4-10h2v10h-2V7zm4 0h2v10h-2V7z" />
    </Svg>
  );
}

export default SvgLayoutVerticalFill;
