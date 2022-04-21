import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAncientPavilionLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.513 2.001a9.004 9.004 0 009.97 5.877A4.501 4.501 0 0119 11.888V19l2 .001v2H3v-2h2v-7.113a4.503 4.503 0 01-3.484-4.01 9.004 9.004 0 009.972-5.876h1.025zM17 12H7v7h10v-7zm-5-6.673l-.11.155A11.012 11.012 0 015.4 9.736l-.358.073.673.19h12.573l.668-.19-.011-.002a11.01 11.01 0 01-6.836-4.326L12 5.326z" />
    </Svg>
  );
}

export default SvgAncientPavilionLine;
