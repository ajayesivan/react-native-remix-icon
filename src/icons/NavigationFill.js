import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigationFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.9 2.3l18.805 6.268a.5.5 0 01.028.939L13 13l-4.425 8.85a.5.5 0 01-.928-.086L2.261 2.912a.5.5 0 01.638-.612z" />
    </Svg>
  );
}

export default SvgNavigationFill;
