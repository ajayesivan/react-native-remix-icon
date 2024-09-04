import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCarouselView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 3H1v2h2v14H1v2h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m3 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm2 1v14h6V5zm10-1a1 1 0 0 1 1-1h3v2h-2v14h2v2h-3a1 1 0 0 1-1-1z" />
  </Svg>
);
export default SvgCarouselView;
