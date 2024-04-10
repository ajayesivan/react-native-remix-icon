import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpaceShipFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.88 18.049a35.896 35.896 0 018.531-16.32.8.8 0 011.178 0 35.897 35.897 0 018.531 16.32c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 01-.894 0l-2.089-4.177a44.015 44.015 0 01-6.584-.875zM12 14.995a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgSpaceShipFill;
