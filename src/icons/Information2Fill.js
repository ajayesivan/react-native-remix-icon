import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformation2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-12.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2 5.5h-1v-4.5h-3v2h1V15h-1v2h4v-2z" />
    </Svg>
  );
}

export default SvgInformation2Fill;
