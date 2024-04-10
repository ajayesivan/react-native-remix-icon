import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeHeartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.389a1 1 0 011.346 0L23 11h-3v9zm-2-1V9.157l-6-5.454-6 5.454V19h12zm-6-2l-3.359-3.359a2.25 2.25 0 013.182-3.182l.177.177.177-.177a2.25 2.25 0 013.182 3.182L12 17z" />
    </Svg>
  );
}

export default SvgHomeHeartLine;
