import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShowersFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 18H9v3H7v-3.252a8 8 0 119.458-10.65A5.5 5.5 0 1117.5 18l-.5.001v3h-2v-3zm-4 2h2v3h-2v-3z" />
    </Svg>
  );
}

export default SvgShowersFill;
