import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShining2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 8l7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8l4-7.5L16 8zm3.25 4l-4.728-2.522L12 4.75 9.478 9.478 4.75 12l4.728 2.522L12 19.25l2.522-4.728L19.25 12z" />
    </Svg>
  );
}

export default SvgShining2Line;
