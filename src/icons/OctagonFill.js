import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOctagonFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565h7.87z" />
    </Svg>
  );
}

export default SvgOctagonFill;
