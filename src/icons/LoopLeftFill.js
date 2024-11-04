import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoopLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4a7.986 7.986 0 00-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.982 9.982 0 0112 2c5.523 0 10 4.477 10 10h-2a8 8 0 00-8-8zm-8 8a8 8 0 0014.357 4.857L16 14.5h6v6l-2.219-2.219A9.982 9.982 0 0112 22C6.477 22 2 17.523 2 12h2z" />
    </Svg>
  );
}

export default SvgLoopLeftFill;
