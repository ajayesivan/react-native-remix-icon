import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThunderstormsLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 18v-2h.5a3.5 3.5 0 10-2.5-5.95V10a6 6 0 10-8 5.659v2.089a8 8 0 119.458-10.65A5.5 5.5 0 1117.5 18l-.5.001zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505v4.505z" />
    </Svg>
  );
}

export default SvgThunderstormsLine;
