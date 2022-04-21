import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBook3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 4H7a2 2 0 100 4h14v13a1 1 0 01-1 1H7a4 4 0 01-4-4V6a4 4 0 014-4h13a1 1 0 011 1v1zM5 18a2 2 0 002 2h12V10H7a3.982 3.982 0 01-2-.535V18zM20 7H7a1 1 0 110-2h13v2z" />
    </Svg>
  );
}

export default SvgBook3Line;
