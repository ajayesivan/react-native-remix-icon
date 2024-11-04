import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAtFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm8-10a8 8 0 10-3.968 6.911l-1.008-1.728A6 6 0 1118 12v1a1 1 0 11-2 0V9h-1.354a4 4 0 10.066 5.94A3 3 0 0020 13v-1zm-8-2a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgAtFill;
