import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastDrop2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.636 6.633L12 .269l6.364 6.364a9 9 0 11-12.728 0zM12 3.097l-4.95 4.95A6.978 6.978 0 005 12.997h14a6.978 6.978 0 00-2.05-4.95L12 3.097z" />
    </Svg>
  );
}

export default SvgContrastDrop2Fill;
