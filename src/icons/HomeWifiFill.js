import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeWifiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.389a1 1 0 011.346 0L23 11h-3v9zM7 11v2a5 5 0 015 5h2a7 7 0 00-7-7zm0 4v3h3a3 3 0 00-3-3z" />
    </Svg>
  );
}

export default SvgHomeWifiFill;
