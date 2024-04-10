import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderHistoryFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.414 3l2 2H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414zM13 9h-2v6h5v-2h-3V9z" />
    </Svg>
  );
}

export default SvgFolderHistoryFill;
