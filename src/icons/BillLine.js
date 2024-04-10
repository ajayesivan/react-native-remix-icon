import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBillLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM8 9h8v2H8V9zm0 4h8v2H8v-2z" />
    </Svg>
  );
}

export default SvgBillLine;
