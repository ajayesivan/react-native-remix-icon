import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBriefcase3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 5V2a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4zm8 2H9v12h6V7zM7 7H4v12h3V7zm10 0v12h3V7h-3zM9 3v2h6V3H9z" />
    </Svg>
  );
}

export default SvgBriefcase3Line;
