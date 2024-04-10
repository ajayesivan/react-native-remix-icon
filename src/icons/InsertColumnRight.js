import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInsertColumnRight(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 3a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6zM9 5H5v14h4V5zm9 2a5 5 0 110 10 5 5 0 010-10zm1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001V9z" />
    </Svg>
  );
}

export default SvgInsertColumnRight;
