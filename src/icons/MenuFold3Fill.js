import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFold3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4H7v2h14V4zm0 7H11v2h10v-2zm0 7H7v2h14v-2zM8 17V7l-5 5 5 5z" />
    </Svg>
  );
}

export default SvgMenuFold3Fill;
