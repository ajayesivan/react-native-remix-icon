import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThunderstormsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.988 18l1.216-1.58a1.5 1.5 0 00-1.189-2.415H15v-3.976a1.5 1.5 0 00-2.69-.914l-6.365 8.281A8.002 8.002 0 019 2a8.003 8.003 0 017.458 5.099A5.5 5.5 0 1117.5 18h-.512zM13 16.005h3l-5 6.5v-4.5H8l5-6.505v4.505z" />
    </Svg>
  );
}

export default SvgThunderstormsFill;
