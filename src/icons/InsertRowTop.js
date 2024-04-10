import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInsertRowTop(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 13a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h16zm-1 2H5v4h14v-4zM12 1a5 5 0 110 10 5 5 0 010-10zm1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001V3z" />
    </Svg>
  );
}

export default SvgInsertRowTop;
