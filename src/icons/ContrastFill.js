import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2v-16a8 8 0 000 16z" />
    </Svg>
  );
}

export default SvgContrastFill;
