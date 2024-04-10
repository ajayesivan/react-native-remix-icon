import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWheelchairLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.998 10.341v2.194A4 4 0 1013.463 18h2.193a6 6 0 11-7.658-7.66zm4 6.659a3 3 0 01-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 113.314.003A2.988 2.988 0 0114.998 10v4.999l1.434.001a2 2 0 011.626.836l.089.135 2.709 4.514-1.715 1.03L16.43 17l-1.433-.001-3 .001zm0-8a1 1 0 00-1 1v4a1 1 0 001 1h.999l.001-5a1 1 0 00-1-1zm0-5a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgWheelchairLine;
