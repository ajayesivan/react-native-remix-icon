import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStickyNote2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 16l-5.003 5H3.998A.996.996 0 013 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16z" />
    </Svg>
  );
}

export default SvgStickyNote2Fill;
