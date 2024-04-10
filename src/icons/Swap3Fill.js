import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwap3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 5.914L3.707 8.207 2.293 6.793 7 2.086l4.707 4.707-1.414 1.414L8 5.914V11H6V5.914zM12.5 7a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm9.207 10.207l-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293-1.414 1.414L17 21.914l4.707-4.707zM11 14a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6z" />
    </Svg>
  );
}

export default SvgSwap3Fill;
