import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTreasureMapFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V5zm4 6v2h2v-2H6zm4 0v2h2v-2h-2zm6-.06l-1.237-1.238-1.061 1.06L14.939 12l-1.237 1.237 1.06 1.061L16 13.061l1.237 1.237 1.061-1.06L17.061 12l1.237-1.237-1.06-1.061L16 10.939z" />
    </Svg>
  );
}

export default SvgTreasureMapFill;
