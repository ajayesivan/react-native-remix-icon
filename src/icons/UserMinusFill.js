import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserMinusFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 14.252V22H4a8 8 0 0110-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm11 5v2h-8v-2h8z" />
    </Svg>
  );
}

export default SvgUserMinusFill;
