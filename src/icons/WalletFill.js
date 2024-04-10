import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWalletFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 9h19a1 1 0 011 1v10a1 1 0 01-1 1h-18a1 1 0 01-1-1V9zm1-6h15v4h-16V4a1 1 0 011-1zm12 11v2h3v-2h-3z" />
    </Svg>
  );
}

export default SvgWalletFill;
