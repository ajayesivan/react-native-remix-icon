import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePaperLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 17v2a1 1 0 102 0V4H5v11H3V3a1 1 0 011-1h16a1 1 0 011 1v16a3 3 0 01-3 3H4a3 3 0 01-3-3v-2h16z" />
    </Svg>
  );
}

export default SvgFilePaperLine;
