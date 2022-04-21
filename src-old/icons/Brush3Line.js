import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 011-1h5V3a1 1 0 011-1h6a1 1 0 011 1v3h5a1 1 0 011 1v6h-1v8a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
    </Svg>
  );
}

export default SvgBrush3Line;
