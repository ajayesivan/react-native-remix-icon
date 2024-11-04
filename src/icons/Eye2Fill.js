import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEye2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5c-.513 0-1.008.077-1.473.22a2.5 2.5 0 11-3.306 3.307A5 5 0 1012 7z" />
    </Svg>
  );
}

export default SvgEye2Fill;
