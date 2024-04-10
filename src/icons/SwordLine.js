import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwordLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.456 3L21 3.003l.002 3.523-5.467 5.466 2.828 2.829 1.415-1.414 1.415 1.414-2.475 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.474 2.475-1.415-1.414 1.414-1.415-2.829-2.828-2.828 2.828 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 2.827-2.828-5.46-5.46L2.999 3l3.546.003 5.453 5.454L17.456 3zm-7.58 10.406l-2.828 2.828.708.707 2.827-2.828-.707-.707zM19 5.001h-.717l-4.87 4.869.706.707L19 5.698v-.697zm-14 0v.7l11.241 11.241.707-.707L5.715 5.002 5 5.001z" />
    </Svg>
  );
}

export default SvgSwordLine;