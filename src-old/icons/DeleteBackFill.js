import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDeleteBackFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.535 3H21a1 1 0 011 1v16a1 1 0 01-1 1H6.535a1 1 0 01-.832-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.535 3zM16 11H9v2h7v-2z" />
    </Svg>
  );
}

export default SvgDeleteBackFill;
