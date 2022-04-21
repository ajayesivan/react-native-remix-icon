import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuitcaseFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 3a1 1 0 011 1v2h5a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h5V4a1 1 0 011-1h6zM8 8H6v11h2V8zm10 0h-2v11h2V8zm-4-3h-4v1h4V5z" />
    </Svg>
  );
}

export default SvgSuitcaseFill;
