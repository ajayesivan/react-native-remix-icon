import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileShield2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 9V4H5v16h6.056a4.99 4.99 0 001.18 1.085l1.39.915H3.993A.993.993 0 013 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0112 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 00.436-.795V13h-5v3.949z" />
    </Svg>
  );
}

export default SvgFileShield2Line;
