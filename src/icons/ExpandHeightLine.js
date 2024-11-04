import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHeightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 2h12v2H6V2zm10.95 7.45L12 4.5 7.053 9.447l1.414 1.415L11 8.328v7.343l-2.535-2.535-1.414 1.414L12 19.5l4.95-4.95-1.414-1.414L13 15.672V8.328l2.536 2.536L16.95 9.45zM18 20v2H6v-2h12z" />
    </Svg>
  );
}

export default SvgExpandHeightLine;
