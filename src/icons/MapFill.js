import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V5z" />
    </Svg>
  );
}

export default SvgMapFill;
