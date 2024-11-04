import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 16v-4l5 5-5 5v-4H4v-2h12zM8 2v3.999L20 6v2H8v4L3 7l5-5z" />
    </Svg>
  );
}

export default SvgArrowLeftRightFill;
