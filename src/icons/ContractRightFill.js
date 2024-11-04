import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 5l7 7-7 7v-6H3v-2h6V5zm9 14V5h2v14h-2z" />
    </Svg>
  );
}

export default SvgContractRightFill;
