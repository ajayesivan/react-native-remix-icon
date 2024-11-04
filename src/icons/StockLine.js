import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStockLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2v3zm-3 2v5h4v-5h-4zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2v3zm-3 2v5h4v-5h-4z" />
    </Svg>
  );
}

export default SvgStockLine;
