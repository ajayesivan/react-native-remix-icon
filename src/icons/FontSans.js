import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontSans(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 4h12v2h-9v6h8v2h-8v7H7V4z" />
    </Svg>
  );
}

export default SvgFontSans;
