import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTumblrFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.27 7.63A5.76 5.76 0 0010.815 2h3.03v5.152h3.637v3.636h-3.636v5.454c0 .515.197 1.207.909 1.667.474.307 1.484.458 3.03.455V22h-4.242a4.545 4.545 0 01-4.546-4.545v-6.667H6.27V7.63z" />
    </Svg>
  );
}

export default SvgTumblrFill;
