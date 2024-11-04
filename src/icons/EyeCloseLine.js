import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEyeCloseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.343 18.782l-1.932-.518.787-2.939a10.99 10.99 0 01-3.237-1.872l-2.153 2.154-1.414-1.414 2.153-2.154a10.957 10.957 0 01-2.371-5.07l1.968-.359C3.903 10.813 7.579 14 12 14s8.098-3.187 8.857-7.39l1.968.358a10.958 10.958 0 01-2.372 5.071l2.154 2.154-1.414 1.414-2.154-2.154a10.991 10.991 0 01-3.237 1.872l.788 2.94-1.932.517-.788-2.94a11.068 11.068 0 01-3.74 0l-.787 2.94z" />
    </Svg>
  );
}

export default SvgEyeCloseLine;
