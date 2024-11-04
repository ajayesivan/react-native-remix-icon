import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgIdCardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 5a1 1 0 011-1h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5zm12 3v2h6V8h-6zm5 4h-5v2h5v-2zm-7.5-2a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM8 13.5A3.5 3.5 0 004.5 17h7A3.5 3.5 0 008 13.5z" />
    </Svg>
  );
}

export default SvgIdCardFill;
