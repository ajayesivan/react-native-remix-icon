import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDvFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 14.745a7 7 0 118 0V21a1 1 0 01-1 1H5a1 1 0 01-1-1v-6.255zM8 14A5 5 0 108 4a5 5 0 000 10zm-1 4v2h2v-2H7zm1-6a3 3 0 110-6 3 3 0 010 6zm6 5v-1.292A8.978 8.978 0 0017 9a8.966 8.966 0 00-2.292-6H21a1 1 0 011 1v12a1 1 0 01-1 1h-7zm4-10v2h2V7h-2z" />
    </Svg>
  );
}

export default SvgDvFill;
