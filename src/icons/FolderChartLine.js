import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderChartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 4h2v8h-2V9zm4 3h2v5h-2v-5zm-8 2h2v3H7v-3z" />
    </Svg>
  );
}

export default SvgFolderChartLine;
