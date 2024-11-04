import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSparklingFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 4.438A2.437 2.437 0 0016.438 2h1.125A2.437 2.437 0 0020 4.438v1.125A2.437 2.437 0 0017.562 8h-1.125A2.437 2.437 0 0014 5.562V4.438zM1 11a6 6 0 006-6h2a6 6 0 006 6v2a6 6 0 00-6 6H7a6 6 0 00-6-6v-2zm16.25 3A3.25 3.25 0 0114 17.25v1.5A3.25 3.25 0 0117.25 22h1.5A3.25 3.25 0 0122 18.75v-1.5A3.25 3.25 0 0118.75 14h-1.5z" />
    </Svg>
  );
}

export default SvgSparklingFill;
