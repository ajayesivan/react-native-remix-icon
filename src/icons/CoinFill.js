import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoinFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M23.005 12.003v2c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-2c0 3.313 4.925 6 11 6s11-2.687 11-6zm-11-8c6.075 0 11 2.686 11 6 0 3.313-4.925 6-11 6s-11-2.687-11-6c0-3.314 4.925-6 11-6z" />
    </Svg>
  );
}

export default SvgCoinFill;
