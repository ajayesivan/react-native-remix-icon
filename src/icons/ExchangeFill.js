import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-13h-4v2h9l-5-5v3zm-5 4l5 5v-3h4v-2h-9z" />
    </Svg>
  );
}

export default SvgExchangeFill;
