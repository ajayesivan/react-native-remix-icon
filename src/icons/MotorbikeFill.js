import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMotorbikeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.365 10L11.2 8h3.492L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 11-1.985.392L15.419 10h-.947l-1.582 5.87-2.925 1.069A4.5 4.5 0 114 13.256V12H2v-2h6.365zM5.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </Svg>
  );
}

export default SvgMotorbikeFill;
