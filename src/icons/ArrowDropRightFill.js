import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 12l-4 4V8l4 4z" />
    </Svg>
  );
}

export default SvgArrowDropRightFill;
