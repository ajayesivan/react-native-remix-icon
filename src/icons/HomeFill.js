import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.223a1 1 0 011.228 0l8 6.223a1 1 0 01.386.79V20z" />
    </Svg>
  );
}

export default SvgHomeFill;
