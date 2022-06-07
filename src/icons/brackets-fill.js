import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBracketsFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z" />
  </Svg>
);

export default SvgBracketsFill;
