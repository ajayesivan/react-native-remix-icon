import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolder4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 011-1h13V7h-8.414l-2-2H4v14h2z" />
    </Svg>
  );
}

export default SvgFolder4Line;
