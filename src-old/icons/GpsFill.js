import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGpsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 16l3 6H9l3-6zm-2.627.255a5 5 0 115.255 0l-1.356-2.711a2 2 0 10-2.544 0l-1.355 2.71zm-2.241 4.482A9.997 9.997 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 01-5.132 8.737l-1.343-2.688a7 7 0 10-7.05 0l-1.343 2.688z" />
    </Svg>
  );
}

export default SvgGpsFill;
