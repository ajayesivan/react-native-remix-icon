import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfold3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 4H3v2h14V4zm-4 7H3v2h10v-2zm4 7H3v2h14v-2zm-1.01-9.186L17.404 7.4 22 11.996l-4.596 4.596-1.414-1.414 3.182-3.182-3.182-3.182z" />
    </Svg>
  );
}

export default SvgMenuUnfold3Line;
