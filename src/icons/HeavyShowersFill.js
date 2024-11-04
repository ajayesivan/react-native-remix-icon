import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeavyShowersFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 18v5h-2v-5H9v3H7v-3.252a8 8 0 119.458-10.65A5.5 5.5 0 1117.5 18H17v3.001h-2v-3h-2z" />
    </Svg>
  );
}

export default SvgHeavyShowersFill;
