import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInboxArchiveLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3l2 4v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-7 1v4h3l-4 4-4-4h3v-4h2zm5.764-5H5.237l-1 2h15.527l-1-2z" />
    </Svg>
  );
}

export default SvgInboxArchiveLine;
