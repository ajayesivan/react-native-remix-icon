import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCakeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 7v4h7a1 1 0 011 1v8h2v2H1v-2h2v-8a1 1 0 011-1h7V7h2zm.83-6.598A3 3 0 0112.732 4.5L11 5.5a3 3 0 011.098-4.098l1.732-1z" />
    </Svg>
  );
}

export default SvgCakeFill;
