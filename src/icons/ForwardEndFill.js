import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForwardEndFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 4a1 1 0 00-1 1v5.666l-9.223-6.148a.5.5 0 00-.777.416v5.732L1.777 4.518A.5.5 0 001 4.934v14.132a.5.5 0 00.777.416L11 13.333v5.733a.5.5 0 00.777.416L21 13.333V19a1 1 0 102 0V5a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgForwardEndFill;
