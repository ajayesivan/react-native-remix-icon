import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailOpenLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.243 6.854L11.49 1.31a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429V20a1 1 0 01-1 1H3a1 1 0 01-1-1V7.283a.5.5 0 01.243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
    </Svg>
  );
}

export default SvgMailOpenLine;
