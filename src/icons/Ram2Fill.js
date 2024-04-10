import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRam2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 5h20a1 1 0 011 1v9a1 1 0 01-1 1v2a1 1 0 01-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 01-1-1v-2a1 1 0 01-1-1V6a1 1 0 011-1zm2 11v1h5.586l1-1H4zm9.414 0l1 1H20v-1h-6.586zM7 9H5v3h2V9zm2 0v3h2V9H9zm6 0h-2v3h2V9zm2 0v3h2V9h-2z" />
    </Svg>
  );
}

export default SvgRam2Fill;
