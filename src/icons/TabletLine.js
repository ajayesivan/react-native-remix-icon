import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTabletLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4v16h12V4H6zM5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm7 15a1 1 0 110 2 1 1 0 010-2z" />
    </Svg>
  );
}

export default SvgTabletLine;
