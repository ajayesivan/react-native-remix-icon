import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCapsuleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19.778 4.222a6 6 0 010 8.485l-2.122 2.12-4.949 4.951a6 6 0 01-8.485-8.485l7.07-7.071a6.001 6.001 0 018.486 0zm-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 005.657 5.657l3.535-3.536z" />
    </Svg>
  );
}

export default SvgCapsuleFill;
