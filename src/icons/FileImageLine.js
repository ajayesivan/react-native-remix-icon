import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileImageLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 8V4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM11 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 7.5l-4-7L8 17h9.5z" />
    </Svg>
  );
}

export default SvgFileImageLine;
