import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchiveDrawerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 13h18v8.003c0 .55-.445.997-.993.997H3.993A.995.995 0 013 21.003V13zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3V2.998zM9 5v2h6V5H9zm0 11v2h6v-2H9z" />
    </Svg>
  );
}

export default SvgArchiveDrawerFill;
