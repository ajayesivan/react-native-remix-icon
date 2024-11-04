import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGamepadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 4a6 6 0 016 6v4a6 6 0 01-6 6H7a6 6 0 01-6-6v-4a6 6 0 016-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z" />
    </Svg>
  );
}

export default SvgGamepadFill;
