import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnsplashFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z" />
    </Svg>
  );
}

export default SvgUnsplashFill;
