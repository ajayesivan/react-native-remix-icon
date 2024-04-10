import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPriceTag2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 7l8.445-5.63a1 1 0 011.11 0L21.005 7v14a1 1 0 01-1 1h-16a1 1 0 01-1-1V7zm9 4a2 2 0 100-4 2 2 0 000 4zm-4 5v2h8v-2h-8zm0-3v2h8v-2h-8z" />
    </Svg>
  );
}

export default SvgPriceTag2Fill;
