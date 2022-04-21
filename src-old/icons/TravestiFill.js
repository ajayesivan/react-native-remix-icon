import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTravestiFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.537 9.95L4.66 7.076 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876A7.5 7.5 0 117.537 9.95z" />
    </Svg>
  );
}

export default SvgTravestiFill;
