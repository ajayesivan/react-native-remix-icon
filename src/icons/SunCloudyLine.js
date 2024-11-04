import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSunCloudyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.984 5.06a6.5 6.5 0 0111.286 6.436A5.5 5.5 0 0117.5 21H9a8 8 0 11.984-15.941zm2.071.544a8.026 8.026 0 014.403 4.495 5.533 5.533 0 013.12.307 4.5 4.5 0 00-7.522-4.802zM17.5 19a3.5 3.5 0 10-2.5-5.95V13a6 6 0 10-6 6h8.5z" />
    </Svg>
  );
}

export default SvgSunCloudyLine;
