import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlideshowView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 10h16V5H4v9zm0 2v3h4v-3H4zm6 0v3h4v-3h-4zm6 0v3h4v-3h-4z" />
    </Svg>
  );
}

export default SvgSlideshowView;
