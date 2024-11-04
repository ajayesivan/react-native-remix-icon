import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResetLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v2a8 8 0 105.135 1.865L15 8V2h6l-2.447 2.447A9.977 9.977 0 0122 12z" />
    </Svg>
  );
}

export default SvgResetLeftFill;
