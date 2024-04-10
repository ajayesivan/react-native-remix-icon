import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlobalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.05 13h5.477a17.9 17.9 0 002.925 8.88A10.005 10.005 0 012.049 13zm0-2a10.005 10.005 0 018.402-8.881 17.9 17.9 0 00-2.925 8.88H2.05zm19.9 0h-5.477a17.9 17.9 0 00-2.925-8.881 10.005 10.005 0 018.403 8.88zm0 2a10.005 10.005 0 01-8.402 8.88A17.9 17.9 0 0016.473 13h5.478zM9.53 13h4.94A15.908 15.908 0 0112 20.59 15.908 15.908 0 019.53 13zm0-2A15.908 15.908 0 0112 3.408 15.908 15.908 0 0114.47 11H9.53z" />
    </Svg>
  );
}

export default SvgGlobalFill;
