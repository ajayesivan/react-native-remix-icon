import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChart2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 .543c.33-.029.663-.043 1-.043C18.351.5 23.5 5.649 23.5 12c0 .337-.014.67-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542zM11 13V4.062A8.001 8.001 0 0012 20a8.001 8.001 0 007.938-7H11zm10.448-2A9.503 9.503 0 0013 2.552V11h8.448z" />
    </Svg>
  );
}

export default SvgPieChart2Line;
