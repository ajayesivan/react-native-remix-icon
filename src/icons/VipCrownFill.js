import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipCrownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 19h20v2h-20v-2zm0-14l5 3 5-6 5 6 5-3v12h-20V5z" />
    </Svg>
  );
}

export default SvgVipCrownFill;
