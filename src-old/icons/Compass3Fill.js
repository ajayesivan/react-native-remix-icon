import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompass3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.5-14.5L10 10l-2.5 6.5L14 14l2.5-6.5zM12 13a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgCompass3Fill;
