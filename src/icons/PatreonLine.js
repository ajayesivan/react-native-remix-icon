import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPatreonLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 17a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM2 2h5v20H2V2zm2 2v16h1V4H4z" />
    </Svg>
  );
}

export default SvgPatreonLine;
