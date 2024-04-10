import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPercentLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.505 21.003a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-11-9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12.571-4.486l1.414 1.415L4.934 20.488 3.52 19.074 19.076 3.517z" />
    </Svg>
  );
}

export default SvgPercentLine;
