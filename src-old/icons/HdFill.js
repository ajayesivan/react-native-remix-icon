import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHdFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.5 8.25V9H6v6h1.5v-2.25h2V15H11V9H9.5v2.25h-2zm7-.75H16a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-1.5v-3zM13 9v6h3a2 2 0 002-2v-2a2 2 0 00-2-2h-3z" />
    </Svg>
  );
}

export default SvgHdFill;
