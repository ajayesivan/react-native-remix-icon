import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInkBottleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 8.997l4.371 1.748a1 1 0 01.629.929v9.323a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.323a1 1 0 01.629-.929L8 8.997h8zm4 5H8v5h12v-5zm-4-11a1 1 0 011 1v4H7v-4a1 1 0 011-1h8z" />
    </Svg>
  );
}

export default SvgInkBottleFill;
