import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgImageEditFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 3a1 1 0 011 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0115.5 7z" />
    </Svg>
  );
}

export default SvgImageEditFill;
