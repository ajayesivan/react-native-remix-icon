import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmpathizeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.364 10.98a4 4 0 010 5.656l-5.657 5.657a1 1 0 01-1.414 0l-5.657-5.657a4 4 0 115.657-5.657l.707.707.707-.707a4 4 0 015.657 0zM12 1a4 4 0 110 8 4 4 0 010-8z" />
    </Svg>
  );
}

export default SvgEmpathizeFill;
