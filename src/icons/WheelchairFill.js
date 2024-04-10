import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWheelchairFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.998 10.341v2.194A4 4 0 1013.463 18h2.193a6 6 0 11-7.658-7.66zm4 6.659a3 3 0 01-3-3v-4a3 3 0 116 0v5h1.434a2 2 0 011.626.836l.089.135 2.709 4.514-1.715 1.03L16.43 17h-4.433zm0-15a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
    </Svg>
  );
}

export default SvgWheelchairFill;
