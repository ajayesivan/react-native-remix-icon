import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartAdd2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.5 3C19.538 3 22 5.5 22 9c0 1.425-.31 2.726-.827 3.907a6 6 0 00-8.36 8.112c-.307.182-.581.342-.813.481C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zM19 17v-3h-2v3h-3v2h2.999L17 22h2l-.001-3H22v-2h-3z" />
    </Svg>
  );
}

export default SvgHeartAdd2Fill;
