import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipCrownFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z" />
    </Svg>
  );
}

export default SvgVipCrownFill;
