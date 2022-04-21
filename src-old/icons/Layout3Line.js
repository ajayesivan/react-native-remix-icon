import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 21a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4zm4-11H5v9h3v-9zm11 0h-9v9h9v-9zm0-5H5v3h14V5z" />
    </Svg>
  );
}

export default SvgLayout3Line;
