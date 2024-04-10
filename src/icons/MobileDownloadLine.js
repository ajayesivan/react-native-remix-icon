import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMobileDownloadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 4v16h10v-8h2v9a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1h7v2H7zm12 2h3l-4 4-4-4h3V2h2v4zm-6 12a1 1 0 11-2 0 1 1 0 012 0z" />
    </Svg>
  );
}

export default SvgMobileDownloadLine;
