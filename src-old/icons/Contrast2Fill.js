import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrast2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-6.671-5.575A8 8 0 1016.425 5.328a8.997 8.997 0 01-2.304 8.793 8.997 8.997 0 01-8.792 2.304z" />
    </Svg>
  );
}

export default SvgContrast2Fill;
