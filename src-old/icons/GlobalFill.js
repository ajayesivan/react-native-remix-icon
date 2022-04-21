import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlobalFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.05 13h5.477a17.9 17.9 0 002.925 8.88A10.005 10.005 0 012.05 13zm0-2a10.005 10.005 0 018.402-8.88A17.9 17.9 0 007.527 11H2.05zm19.9 0h-5.477a17.9 17.9 0 00-2.925-8.88A10.005 10.005 0 0121.95 11zm0 2a10.005 10.005 0 01-8.402 8.88A17.9 17.9 0 0016.473 13h5.478zM9.53 13h4.94A15.908 15.908 0 0112 20.592 15.908 15.908 0 019.53 13zm0-2A15.908 15.908 0 0112 3.408 15.908 15.908 0 0114.47 11H9.53z" />
    </Svg>
  );
}

export default SvgGlobalFill;
