import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDraftFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a1 1 0 011 1v3.757l-8.999 9-.006 4.238 4.246.006L21 15.242V21a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM12 12H7v2h5v-2zm3-4H7v2h8V8z" />
    </Svg>
  );
}

export default SvgDraftFill;
