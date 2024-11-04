import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoopRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4c2.59 0 4.894 1.23 6.357 3.143L16 9.5h6v-6l-2.219 2.219A9.982 9.982 0 0012 2C6.477 2 2 6.477 2 12h2a8 8 0 018-8zm8 8a8 8 0 01-14.357 4.857L8 14.5H2v6l2.219-2.219A9.982 9.982 0 0012 22c5.523 0 10-4.477 10-10h-2z" />
    </Svg>
  );
}

export default SvgLoopRightFill;
