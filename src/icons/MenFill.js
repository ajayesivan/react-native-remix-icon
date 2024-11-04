import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.586 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 11-1.414-1.414L18.586 5z" />
    </Svg>
  );
}

export default SvgMenFill;
