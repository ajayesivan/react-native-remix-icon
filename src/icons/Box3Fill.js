import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBox3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.502 5.922L12 1 3.498 5.922 12 10.845l8.502-4.923zM2.5 7.656V17.5l8.5 4.921v-9.845l-8.5-4.92zM13 22.42l8.5-4.921V7.655L13 12.576v9.845z" />
    </Svg>
  );
}

export default SvgBox3Fill;
