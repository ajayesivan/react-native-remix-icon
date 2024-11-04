import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13H4v-2h8V4l8 8-8 8v-7z" />
    </Svg>
  );
}

export default SvgArrowRightFill;
