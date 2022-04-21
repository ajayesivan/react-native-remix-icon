import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailOpenFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.243 6.854L11.49 1.31a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429V20a1 1 0 01-1 1H3a1 1 0 01-1-1V7.283a.5.5 0 01.243-.429zm16.103 1.39l-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56-1.308-1.513z" />
    </Svg>
  );
}

export default SvgMailOpenFill;
