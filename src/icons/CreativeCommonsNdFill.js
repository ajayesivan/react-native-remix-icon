import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsNdFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4 11H8v2h8v-2zm0-4H8v2h8V9z" />
    </Svg>
  );
}

export default SvgCreativeCommonsNdFill;
