import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0118 17a5.985 5.985 0 01-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 016 17a5.985 5.985 0 01-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103l-1.958 5.386A3.975 3.975 0 0018 15c.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0l-1.958 5.386A3.975 3.975 0 006 15c.7 0 1.37-.18 1.958-.51L6 9.102z" />
    </Svg>
  );
}

export default SvgScales3Line;
