import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboard2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17a5 5 0 00-4.831 8.366L7.05 16.95l-.156-.161A7 7 0 0112 5zm6.392 4.143c.39.872.608 1.84.608 2.857a6.982 6.982 0 01-2.05 4.95l-1.414-1.414a4.992 4.992 0 001.294-4.831l1.562-1.562zm-2.15-2.8l1.415 1.414-3.724 3.726A2.002 2.002 0 0112 14a2 2 0 11.517-3.933l3.726-3.724z" />
    </Svg>
  );
}

export default SvgDashboard2Line;
