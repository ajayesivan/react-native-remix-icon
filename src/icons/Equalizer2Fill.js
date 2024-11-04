import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualizer2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm17 1h-8V6h8v2zm-6 9a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm-2-1v2H4v-2h8z" />
    </Svg>
  );
}

export default SvgEqualizer2Fill;
