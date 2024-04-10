import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBold(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 11h4.5a2.5 2.5 0 000-5H8v5zm10 4.5a4.5 4.5 0 01-4.5 4.5H6V4h6.5a4.5 4.5 0 013.256 7.606A4.498 4.498 0 0118 15.5zM8 13v5h5.5a2.5 2.5 0 000-5H8z" />
    </Svg>
  );
}

export default SvgBold;
