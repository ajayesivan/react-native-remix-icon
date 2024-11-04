import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMotorbikeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 13.256V12H2v-2h6.365L11.2 8h3.492L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 11-1.985.392L15.419 10h-.947l-1.582 5.87-.002-.001.002.005-2.925 1.065A4.5 4.5 0 114 13.256zm2-.229a4.5 4.5 0 013.281 2.033l1.957-.713L12.403 10h-.547L9 12H6v1.027zM5.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </Svg>
  );
}

export default SvgMotorbikeLine;
