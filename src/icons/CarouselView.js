import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCarouselView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3H1v2h2v14H1v2h3a1 1 0 001-1V4a1 1 0 00-1-1zm3 1a1 1 0 011-1h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4zm2 1v14h6V5H9zm10-1a1 1 0 011-1h3v2h-2v14h2v2h-3a1 1 0 01-1-1V4z" />
    </Svg>
  );
}

export default SvgCarouselView;
