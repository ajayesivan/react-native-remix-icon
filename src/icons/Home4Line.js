import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHome4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 21H5a1 1 0 01-1-1v-9H1l10.327-9.389a1 1 0 011.346 0L23 11h-3v9a1 1 0 01-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" />
    </Svg>
  );
}

export default SvgHome4Line;
