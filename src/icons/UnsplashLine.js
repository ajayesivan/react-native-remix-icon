import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUnsplashLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M10 10v4h4v-4h7v11H3V10h7zm-2 2H5v7h14v-7h-3l-.001 4H8v-4zm8-9v6H8V3h8zm-2 2h-4v2h4V5z" />
  </Svg>
);

export default SvgUnsplashLine;
