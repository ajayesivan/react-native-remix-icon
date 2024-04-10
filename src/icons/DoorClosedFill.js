import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorClosedFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.998 21v-2h2V4a1 1 0 011-1h12a1 1 0 011 1v15h2v2h-18zm12-10h-2v2h2v-2z" />
    </Svg>
  );
}

export default SvgDoorClosedFill;
