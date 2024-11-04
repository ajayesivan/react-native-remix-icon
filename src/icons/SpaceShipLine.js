import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpaceShipLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.88 18.05A35.897 35.897 0 0111.41 1.728a.8.8 0 011.178 0 35.897 35.897 0 018.531 16.32c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 01-.894 0l-2.089-4.177a44.028 44.028 0 01-6.584-.875zm6.697-1.123l1.158.066L12 19.523l1.265-2.53 1.157-.066a42.139 42.139 0 004.227-.455 33.914 33.914 0 00-6.65-12.387 33.913 33.913 0 00-6.648 12.387 42.14 42.14 0 004.226.455zM12 14.995a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgSpaceShipLine;
