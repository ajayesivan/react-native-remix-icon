import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackshareLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.537 13H7.33a3.001 3.001 0 01-5.829-1 3 3 0 015.83-1h2.206l3.464-6h3.17a3.001 3.001 0 015.83 1 3 3 0 01-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0122 18a3 3 0 01-5.829 1h-3.171l-3.464-6zm9.464 4a1 1 0 100 2 1 1 0 000-2zm-14.5-6a1 1 0 100 2 1 1 0 000-2zm14.5-6a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgStackshareLine;
