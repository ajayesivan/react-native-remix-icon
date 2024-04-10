import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMegaphoneLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 17s7 1 10 4h1a1 1 0 001-1v-6.063a2 2 0 000-3.874V4a1 1 0 00-1-1h-1C16 6 9 7 9 7H5a2 2 0 00-2 2v6a2 2 0 002 2h1l1 5h2v-5zm2-8.339c.683-.146 1.527-.35 2.44-.617 1.678-.494 3.81-1.271 5.56-2.47v12.851c-1.75-1.198-3.883-1.975-5.56-2.469A33.967 33.967 0 0011 15.34V8.66zM5 9h4v6H5V9z" />
    </Svg>
  );
}

export default SvgMegaphoneLine;
