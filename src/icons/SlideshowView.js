import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlideshowView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 10h16V5H4zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3z" />
  </Svg>
);
export default SvgSlideshowView;
