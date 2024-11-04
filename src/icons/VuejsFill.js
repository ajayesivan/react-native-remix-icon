import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVuejsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1.001 3h4l7 12 7-12h4l-11 19-11-19zm8.667 0L12 7l2.333-4h4.035l-6.368 11L5.633 3h4.035z" />
    </Svg>
  );
}

export default SvgVuejsFill;
