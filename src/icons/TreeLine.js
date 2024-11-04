import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTreeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 7a6 6 0 1111.95.775A6 6 0 0115 19h-2v3h-2v-3H8.5A5.5 5.5 0 016.191 8.507 6.008 6.008 0 016 7zm1.01 3.332A3.502 3.502 0 008.5 17H15a4 4 0 001.454-7.728l-.841-.328C15.79 8.304 16 7.672 16 7a4 4 0 10-6.4 3.2L8.4 11.8a6.03 6.03 0 01-1.39-1.468z" />
    </Svg>
  );
}

export default SvgTreeLine;
