import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHexagonFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5h11z" />
    </Svg>
  );
}

export default SvgHexagonFill;
