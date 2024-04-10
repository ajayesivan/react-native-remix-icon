import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 5l7 7-7 7v-6H8v-2h6V5zM4 19V5h2v14H4z" />
    </Svg>
  );
}

export default SvgExpandRightFill;
