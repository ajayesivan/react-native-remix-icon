import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProjector2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 01-1-1V6a1 1 0 011-1h10.528A5.985 5.985 0 0117 3c1.777 0 3.374.773 4.472 2H22a1 1 0 011 1v12a1 1 0 01-1 1zM11.341 7H3v10h18v-3.528A6 6 0 0111.341 7zM17 13a4 4 0 100-8 4 4 0 000 8zM5 13h2v2H5v-2zm3 0h2v2H8v-2z" />
    </Svg>
  );
}

export default SvgProjector2Line;
