import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpam3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15.936 2.5L21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5h7.87zM8 11v2h8v-2H8z" />
    </Svg>
  );
}

export default SvgSpam3Fill;
