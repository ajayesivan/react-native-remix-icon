import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
    </Svg>
  );
}

export default SvgAddFill;
