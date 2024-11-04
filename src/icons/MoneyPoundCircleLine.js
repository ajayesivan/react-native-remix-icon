import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyPoundCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3-7h-1v-2h1v-1A3.5 3.5 0 0115.75 8.69l-1.987.497a1.499 1.499 0 00-2.76.815v1h3v2h-3v2h5v2h-8v-2h1v-2z" />
    </Svg>
  );
}

export default SvgMoneyPoundCircleLine;
