import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompassesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 4.123V1.997h2v2.126a4.002 4.002 0 011.802 6.728l6.064 10.502-1.732 1-6.063-10.501a4.004 4.004 0 01-2.142 0L4.866 22.353l-1.732-1 6.063-10.502A4.002 4.002 0 0111 4.123zm1 4.874a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgCompassesFill;
