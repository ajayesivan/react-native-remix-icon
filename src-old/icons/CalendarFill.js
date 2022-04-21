import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendarFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 11h20v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9zm15-8h4a1 1 0 011 1v5H2V4a1 1 0 011-1h4V1h2v2h6V1h2v2z" />
    </Svg>
  );
}

export default SvgCalendarFill;
