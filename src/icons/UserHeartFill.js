import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserHeartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 013.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 013.182-3.182zM12 14v8H4a8 8 0 017.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6z" />
    </Svg>
  );
}

export default SvgUserHeartFill;
