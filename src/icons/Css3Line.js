import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCss3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.8 14h2.04l-.545 2.724 5.744 2.155 7.228-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3-8-3 .8-4z" />
    </Svg>
  );
}

export default SvgCss3Line;
