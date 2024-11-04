import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyRupeeCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-8.5-4c.328.436.563.946.675 1.5H16V11h-1.825a3.751 3.751 0 01-3.675 3h-.19l3.72 3.72-1.06 1.06L8 13.81V12.5h2.5c.98 0 1.813-.626 2.122-1.5H8V9.5h4.622A2.251 2.251 0 0010.5 8H8V6.5h8V8h-2.5z" />
    </Svg>
  );
}

export default SvgMoneyRupeeCircleLine;
