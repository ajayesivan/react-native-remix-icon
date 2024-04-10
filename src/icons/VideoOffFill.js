import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 18.414l4.192 4.193 1.415-1.415-19.8-19.799-1.414 1.415L2.586 4H2a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-.586zM16 4H8.214l14.494 14.494A.5.5 0 0023 18.04V5.96a.5.5 0 00-.787-.41L17 9.2V5a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgVideoOffFill;
