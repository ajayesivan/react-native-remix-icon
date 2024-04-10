import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipVertical2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm4 7l4-4 4 4h-3v4h3l-4 4-4-4h3v-4H8z" />
    </Svg>
  );
}

export default SvgFlipVertical2Fill;
