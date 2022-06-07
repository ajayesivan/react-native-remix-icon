import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Svg24HoursFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.865 6.865L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2z" />
  </Svg>
);

export default Svg24HoursFill;
