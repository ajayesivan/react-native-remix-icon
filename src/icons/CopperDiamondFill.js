import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopperDiamondFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-2.5-13l-2.5 2.5 5 5 5-5-2.5-2.5h-5z" />
    </Svg>
  );
}

export default SvgCopperDiamondFill;
