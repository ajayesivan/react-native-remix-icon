import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStairsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3h6v18H3v-6h4v-4h4V7h4V3z" />
    </Svg>
  );
}

export default SvgStairsFill;
