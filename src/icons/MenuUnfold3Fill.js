import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfold3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 4H3v2h14V4zm-4 7H3v2h10v-2zm4 7H3v2h14v-2zm0-1V7l5 5-5 5z" />
    </Svg>
  );
}

export default SvgMenuUnfold3Fill;
