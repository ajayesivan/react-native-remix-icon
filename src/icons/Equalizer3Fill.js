import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualizer3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 3v3H3v2h4v3h3V3H7zm5 5h9V6h-9v2zm5 5v3h4v2h-4v3h-3v-8h3zm-5 5H3v-2h9v2z" />
    </Svg>
  );
}

export default SvgEqualizer3Fill;
