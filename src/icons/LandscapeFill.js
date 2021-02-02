import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLandscapeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 21l-4.762-8.73L15 6l8 15h-7zM8 10l6 11H2l6-11zM5.5 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </Svg>
  );
}

export default SvgLandscapeFill;
