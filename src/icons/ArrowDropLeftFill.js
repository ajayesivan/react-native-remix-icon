import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 12l4-4v8l-4-4z" />
    </Svg>
  );
}

export default SvgArrowDropLeftFill;
