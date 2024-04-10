import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftWideLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.369 12l4.747-8.968 1.768.936L10.632 12l4.252 8.032-1.768.936L8.37 12z" />
    </Svg>
  );
}

export default SvgArrowLeftWideLine;
