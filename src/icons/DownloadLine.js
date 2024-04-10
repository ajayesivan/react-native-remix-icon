import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.415L12 17 3.515 8.515 4.929 7.1 11 13.172V2h2v11.172z" />
    </Svg>
  );
}

export default SvgDownloadLine;
