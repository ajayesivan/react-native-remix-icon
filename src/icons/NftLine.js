import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 12a2 2 0 100-4 2 2 0 000 4zm12.5-5.5L12 1 2.5 6.5v11L12 23l9.5-5.5v-11zM12 3.311l7.5 4.342v6.88l-4.562-2.736-7.971 5.978L4.5 16.347V7.653L12 3.311zm0 17.378l-3.152-1.825 6.214-4.66 3.998 2.398L12 20.689z" />
    </Svg>
  );
}

export default SvgNftLine;
