import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilter3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </Svg>
  );
}

export default SvgFilter3Fill;
