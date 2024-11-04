import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon5Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.005 14v7a1 1 0 01-1 1h-16a1 1 0 01-1-1v-7a2 2 0 100-4V3a1 1 0 011-1h16a1 1 0 011 1v7a2 2 0 100 4zm-2 1.465a3.999 3.999 0 01-2-3.465c0-1.48.804-2.773 2-3.465V4h-14v4.535c1.195.692 2 1.984 2 3.465 0 1.48-.805 2.773-2 3.465V20h14v-4.535zM9.005 6h6v2h-6V6zm0 10h6v2h-6v-2z" />
    </Svg>
  );
}

export default SvgCoupon5Line;
