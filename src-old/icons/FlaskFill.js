import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlaskFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0118.656 22H5.344a1.5 1.5 0 01-1.362-2.129l4.282-9.276A7.994 7.994 0 009 7.243V4H8V2h8zm-3 2h-2v4h2V4z" />
    </Svg>
  );
}

export default SvgFlaskFill;
