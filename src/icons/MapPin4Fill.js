import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPin4Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 17.938A8.001 8.001 0 0112 2a8 8 0 011 15.938V21h-2v-3.062zM5 22h14v2H5v-2z" />
    </Svg>
  );
}

export default SvgMapPin4Fill;
