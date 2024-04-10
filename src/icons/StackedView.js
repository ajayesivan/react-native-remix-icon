import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackedView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 2a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H4zm1 11V4h14v9H5zm-1 4a1 1 0 00-1 1v4h2v-3h14v3h2v-4a1 1 0 00-1-1H4z" />
    </Svg>
  );
}

export default SvgStackedView;
