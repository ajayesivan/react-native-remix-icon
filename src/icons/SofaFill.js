import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSofaFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3H9a6.002 6.002 0 00-5.92 5.02A4.5 4.5 0 018 12.5V14h8v-1.5a4.5 4.5 0 014.92-4.48A6.002 6.002 0 0015 3zm6 7.05a2.5 2.5 0 00-3 2.45V17h-2v-1H8v1H6v-4.5a2.5 2.5 0 00-5 0c0 .589.182 1.039.39 1.555.28.696.61 1.51.61 2.945v3a1 1 0 001 1h18a1 1 0 001-1v-3c0-1.434.33-2.25.61-2.945.208-.516.39-.966.39-1.555a2.5 2.5 0 00-2-2.45z" />
    </Svg>
  );
}

export default SvgSofaFill;
