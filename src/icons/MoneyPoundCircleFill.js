import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyPoundCircleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-3-9v2h-1v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 012.76-.815l1.986-.497a3.501 3.501 0 00-6.746 1.312v1h-1v2h1z" />
    </Svg>
  );
}

export default SvgMoneyPoundCircleFill;
