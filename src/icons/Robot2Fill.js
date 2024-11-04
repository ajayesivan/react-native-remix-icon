import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRobot2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h5V3.118A1.5 1.5 0 1113.5 2zM0 10h2v6H0v-6zm24 0h-2v6h2v-6zM9 14.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5-1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </Svg>
  );
}

export default SvgRobot2Fill;
