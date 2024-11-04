import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlashlightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 10h7l-9 13v-9H4l9-13v9z" />
    </Svg>
  );
}

export default SvgFlashlightFill;
