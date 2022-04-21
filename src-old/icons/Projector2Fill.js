import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProjector2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 01-1-1V6a1 1 0 011-1h9.81a6.481 6.481 0 014.69-2 6.48 6.48 0 014.69 2H22a1 1 0 011 1v12a1 1 0 01-1 1zm-5.5-5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-2a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM4 13v2h2v-2H4zm4 0v2h2v-2H8z" />
    </Svg>
  );
}

export default SvgProjector2Fill;
