import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForward5Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 11-1.384-4.5H16v2h6v-6h-2V6a9.985 9.985 0 00-8-4zM9.5 8.5h5V10H11v1.25h1.625a2.125 2.125 0 010 4.25H9.5V14h3.125a.625.625 0 100-1.25H9.5V8.5z" />
    </Svg>
  );
}

export default SvgForward5Line;
