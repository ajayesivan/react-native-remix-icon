import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.005 21h-7a1 1 0 01-1-1V4a1 1 0 011-1h7a2 2 0 104 0h7a1 1 0 011 1v16a1 1 0 01-1 1h-7a2 2 0 10-4 0zM8.54 19a3.998 3.998 0 013.465-2c1.48 0 2.773.804 3.465 2h4.535V5H15.47a3.999 3.999 0 01-3.465 2A3.998 3.998 0 018.54 5H4.005v14H8.54zM6.005 8h2v8h-2V8zm10 0h2v8h-2V8z" />
    </Svg>
  );
}

export default SvgCoupon4Line;
