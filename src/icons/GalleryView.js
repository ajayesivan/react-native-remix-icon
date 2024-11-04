import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGalleryView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h5v4H6zm5 6H6v4h5zm2-6h5v4h-5zm5 6h-5v4h5z" />
  </Svg>
);
export default SvgGalleryView;
