import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPencilLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m15.728 9.686-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414 1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
  </Svg>
);

export default SvgPencilLine;
