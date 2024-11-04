import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopperCoinFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-14.243l-4.243 4.243 4.243 4.242 4.242-4.242-4.242-4.243z" />
    </Svg>
  );
}

export default SvgCopperCoinFill;
