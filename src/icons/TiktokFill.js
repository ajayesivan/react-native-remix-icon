import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTiktokFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 8.245V15.5a6.5 6.5 0 11-5-6.326v3.163a3.5 3.5 0 102 3.163V2h3a5 5 0 005 5v3a7.966 7.966 0 01-5-1.755z" />
    </Svg>
  );
}

export default SvgTiktokFill;
