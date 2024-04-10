import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractUpDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 5l-6 6-6-6h12zm0 14l-6-6-6 6h12z" />
    </Svg>
  );
}

export default SvgContractUpDownFill;
