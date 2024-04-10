import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopperDiamondLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3-12h6l2.5 3.5-5.5 5.5-5.5-5.5 2.5-3.5zm1.03 2l-.92 1.29 2.89 2.89 2.89-2.89-.92-1.29h-3.94z" />
    </Svg>
  );
}

export default SvgCopperDiamondLine;
