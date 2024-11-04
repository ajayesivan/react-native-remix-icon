import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParkingBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm4 2h3.5a3.5 3.5 0 110 7H11v3H9V7zm2 2v3h1.5a1.5 1.5 0 000-3H11z" />
    </Svg>
  );
}

export default SvgParkingBoxLine;
