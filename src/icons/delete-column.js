import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDeleteColumn = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 3a1 1 0 0 1 1 1v8a5 5 0 1 1 .213 8.152L13 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm-1 2H7v14h4V5zm8 10h-6v2h6v-2z" />
  </Svg>
);

export default SvgDeleteColumn;
