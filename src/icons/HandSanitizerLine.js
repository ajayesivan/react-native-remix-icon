import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHandSanitizerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 2v2l-4-.001V6h3v2a4 4 0 014 4v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a4 4 0 014-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2H17zm-1 8H8a2 2 0 00-2 2v8h12v-8a2 2 0 00-2-2zm-3 2v2h2v2h-2v2h-2v-2H9v-2h2v-2h2z" />
    </Svg>
  );
}

export default SvgHandSanitizerLine;
