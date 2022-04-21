import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPulseLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 7.539l6 14L18.659 13H23v-2h-5.659L15 16.461l-6-14L5.341 11H1v2h5.659z" />
    </Svg>
  );
}

export default SvgPulseLine;
