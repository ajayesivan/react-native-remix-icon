import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAncientPavilionLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1.516 7.877A4.5 4.5 0 005 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 003.484-4.01A9 9 0 0112.514 2h-1.029a9 9 0 01-9.97 5.877zM17 19H7V12h10v7.001zm1.556-9.064L18.28 10H5.72l-.274-.063a2.593 2.593 0 01-.392-.121c1.537-.284 2.97-.895 4.298-1.835A10.88 10.88 0 0012 5.346a10.879 10.879 0 002.648 2.635c1.329.94 2.761 1.551 4.298 1.835a2.59 2.59 0 01-.391.121z" />
    </Svg>
  );
}

export default SvgAncientPavilionLine;
