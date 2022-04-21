import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScan2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.671 4.257L13.414 12 12 13.414 8.554 9.968a4 4 0 103.697-1.96l-1.805-1.805a6 6 0 11-3.337 2.32L5.68 7.094a8 8 0 103.196-2.461L7.374 3.132A9.957 9.957 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 013.671-7.743z" />
    </Svg>
  );
}

export default SvgScan2Line;
