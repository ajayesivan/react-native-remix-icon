import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRestaurantLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z" />
  </Svg>
);

export default SvgRestaurantLine;
