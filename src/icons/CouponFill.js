import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCouponFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 9.5V4a1 1 0 011-1h18a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-18a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5zm7-.5v2h6V9h-6zm0 4v2h6v-2h-6z" />
    </Svg>
  );
}

export default SvgCouponFill;
