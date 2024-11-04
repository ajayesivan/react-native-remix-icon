import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandLeftRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 6l-6 6 6 6V6zm6 12l6-6-6-6v12z" />
    </Svg>
  );
}

export default SvgExpandLeftRightFill;
