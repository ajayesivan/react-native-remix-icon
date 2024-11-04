import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipDiamondFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.878 3.003h14.254a1 1 0 01.809.412l3.822 5.256a.5.5 0 01-.037.633l-11.354 12.3a.5.5 0 01-.735 0L.283 9.305a.5.5 0 01-.037-.633l3.823-5.256a1 1 0 01.809-.412z" />
    </Svg>
  );
}

export default SvgVipDiamondFill;
