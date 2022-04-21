import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBag2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 006 0V6h2v2A5 5 0 017 8V6h2z" />
    </Svg>
  );
}

export default SvgShoppingBag2Line;
