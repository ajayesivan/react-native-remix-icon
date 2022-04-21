import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountPinBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 21l-2 2-2-2H4.995A1.995 1.995 0 013 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H14zm-7.643-3h11.49a6.992 6.992 0 00-5.745-3 6.992 6.992 0 00-5.745 3zM12 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    </Svg>
  );
}

export default SvgAccountPinBoxFill;
