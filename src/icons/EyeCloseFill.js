import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEyeCloseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.13 15.842l-.787 2.94-1.932-.517.787-2.94a10.988 10.988 0 01-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.957 10.957 0 01-2.371-5.07l.9-.164A16.923 16.923 0 0012 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.958 10.958 0 01-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a10.989 10.989 0 01-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.078 11.078 0 01-3.74 0z" />
    </Svg>
  );
}

export default SvgEyeCloseFill;
