import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlurOffFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04A9 9 0 015.432 6.848zM8.243 4.03L12 .272l6.364 6.364a9.002 9.002 0 012.05 9.564L8.244 4.03z" />
    </Svg>
  );
}

export default SvgBlurOffFill;
