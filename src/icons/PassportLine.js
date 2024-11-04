import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPassportLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm-1 2H5v16h14V4zm-3 12v2H8v-2h8zM12 6a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgPassportLine;
