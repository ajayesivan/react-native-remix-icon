import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBox2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM4.5 7.653v.005L12 12v8.689l7.5-4.342V7.653L12 3.311 4.5 7.653z" />
    </Svg>
  );
}

export default SvgBox2Line;
