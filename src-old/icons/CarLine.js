import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCarLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 20H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1V11l2.48-5.788A2 2 0 016.32 4h11.36a2 2 0 011.838 1.212L22 11v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm1-7H4v5h16v-5zM4.176 11h15.648l-2.143-5H6.32l-2.143 5zM6.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgCarLine;
