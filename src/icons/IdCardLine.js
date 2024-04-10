import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIdCardLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 6h18v12H3V6zM2 4a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1H2zm11 4h6v2h-6V8zm5 4h-5v2h5v-2zm-7.5-2a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM8 13.5A3.5 3.5 0 004.5 17h7A3.5 3.5 0 008 13.5z" />
    </Svg>
  );
}

export default SvgIdCardLine;
