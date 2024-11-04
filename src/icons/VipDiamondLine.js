import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipDiamondLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.878 3.003h14.254a1 1 0 01.809.412l3.822 5.256a.5.5 0 01-.037.633l-11.354 12.3a.5.5 0 01-.706.029c-.007-.006-3.801-4.116-11.383-12.329a.5.5 0 01-.037-.633l3.823-5.256a1 1 0 01.809-.412zm.509 2l-2.8 3.849 9.418 10.202 9.417-10.202-2.8-3.85H5.388z" />
    </Svg>
  );
}

export default SvgVipDiamondLine;
