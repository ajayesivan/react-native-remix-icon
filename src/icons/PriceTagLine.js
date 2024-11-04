import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPriceTagLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 7l8.445-5.63a1 1 0 011.11 0L21.005 7v14a1 1 0 01-1 1h-16a1 1 0 01-1-1V7zm2 1.07V20h14V8.07l-7-4.667-7 4.667zm7 2.93a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgPriceTagLine;
