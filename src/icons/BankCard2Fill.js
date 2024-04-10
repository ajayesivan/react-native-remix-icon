import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBankCard2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22.005 11v9a1 1 0 01-1 1h-18a1 1 0 01-1-1v-9h20zm0-4h-20V4a1 1 0 011-1h18a1 1 0 011 1v3z" />
    </Svg>
  );
}

export default SvgBankCard2Fill;
