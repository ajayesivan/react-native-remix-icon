import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlideshow2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 01-1-1V4H2V2h20v2h-1v12a1 1 0 01-1 1h-7zM10 6v7l5-3.5L10 6z" />
    </Svg>
  );
}

export default SvgSlideshow2Fill;
