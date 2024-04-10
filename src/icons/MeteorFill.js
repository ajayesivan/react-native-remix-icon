import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMeteorFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 1v12A9 9 0 117.375 5.278L14 1.453v2.77L21 1zm-9 7a5 5 0 100 10 5 5 0 000-10z" />
    </Svg>
  );
}

export default SvgMeteorFill;
