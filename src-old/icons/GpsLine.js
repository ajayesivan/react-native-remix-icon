import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGpsLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.132 20.737A9.997 9.997 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 01-5.132 8.737l-.896-1.791a8 8 0 10-7.945 0l-.895 1.791zm1.792-3.584a6 6 0 116.151 0l-.898-1.797a4 4 0 10-4.354 0l-.899 1.797zM12 16l3 6H9l3-6z" />
    </Svg>
  );
}

export default SvgGpsLine;
