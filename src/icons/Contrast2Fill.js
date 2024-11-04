import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrast2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-6.671-5.575A8 8 0 1016.425 5.325a8.997 8.997 0 01-2.304 8.793 8.997 8.997 0 01-8.792 2.304z" />
    </Svg>
  );
}

export default SvgContrast2Fill;
