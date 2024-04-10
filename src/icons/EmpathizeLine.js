import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmpathizeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.364 10.98a4 4 0 010 5.656l-5.657 5.657a1 1 0 01-1.414 0l-5.657-5.657a4 4 0 115.657-5.657l.707.707.707-.707a4 4 0 015.657 0zM7.051 12.392a2 2 0 000 2.829l4.95 4.95 4.95-4.95a2 2 0 10-2.83-2.827l-2.123 2.118-2.119-2.12a2 2 0 00-2.828 0zM12 1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgEmpathizeLine;
