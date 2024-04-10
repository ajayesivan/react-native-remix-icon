import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.16 14a6.981 6.981 0 00-5.147 2.256A7.966 7.966 0 0012 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0012.16 16zM12 4a8 8 0 00-6.384 12.821A8.975 8.975 0 0112.16 14a8.972 8.972 0 016.362 2.634A8 8 0 0012 4zm0 1a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgAccountCircleLine;
