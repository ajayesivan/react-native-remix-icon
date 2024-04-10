import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCameraLensFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.827 21.763L14.31 14l3.532 6.117A9.955 9.955 0 0112 22c-.746 0-1.473-.082-2.173-.237zM7.89 21.12A10.029 10.029 0 012.458 15h8.965L7.89 21.119zM2.05 13a9.964 9.964 0 012.583-7.761L9.112 13H2.05zm4.109-9.117A9.955 9.955 0 0112 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883zM16.11 2.88A10.028 10.028 0 0121.542 9h-8.965l3.533-6.119zM21.95 11a9.964 9.964 0 01-2.583 7.761L14.888 11h7.064z" />
    </Svg>
  );
}

export default SvgCameraLensFill;
