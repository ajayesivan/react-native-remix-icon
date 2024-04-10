import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContractLeftRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 18l6-6-6-6v12zM19 6l-6 6 6 6V6z" />
    </Svg>
  );
}

export default SvgContractLeftRightFill;
