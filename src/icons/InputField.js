import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInputField(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 5h3v14H8v2h8v-2h-3V5h3V3H8v2zM2 7a1 1 0 00-1 1v8a1 1 0 001 1h6v-2H3V9h5V7H2zm14 2h5v6h-5v2h6a1 1 0 001-1V8a1 1 0 00-1-1h-6v2z" />
    </Svg>
  );
}

export default SvgInputField;
