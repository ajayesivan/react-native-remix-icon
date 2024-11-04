import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMedalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 7a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 1.5l1.322 2.68 2.958.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.958-.43L12 10.5zM18 2v3l-1.363 1.138A9.935 9.935 0 0013 5.049L13 2 18 2zm-7-.001v3.05a9.935 9.935 0 00-3.636 1.088L6 5V2l5-.001z" />
    </Svg>
  );
}

export default SvgMedalLine;
