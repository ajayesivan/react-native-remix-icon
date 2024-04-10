import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHospitalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 20v-6h8v6h3V4H5v16h3zm2 0h4v-4h-4v4zm11 0h2v2H1v-2h2V3a1 1 0 011-1h16a1 1 0 011 1v17zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2z" />
    </Svg>
  );
}

export default SvgHospitalLine;
