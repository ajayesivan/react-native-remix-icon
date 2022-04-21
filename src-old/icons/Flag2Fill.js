import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlag2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 3h19.138a.5.5 0 01.435.748L18 10l3.573 6.252a.5.5 0 01-.435.748H4v5H2V3z" />
    </Svg>
  );
}

export default SvgFlag2Fill;
