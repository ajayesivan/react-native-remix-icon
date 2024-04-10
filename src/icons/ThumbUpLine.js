import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThumbUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.6 8H21a2 2 0 012 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 01-.925.62H2a1 1 0 01-1-1V10a1 1 0 011-1h3.482a1 1 0 00.817-.424L11.752.851a.5.5 0 01.632-.159l1.814.908a2.5 2.5 0 011.305 2.852L14.6 8zM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 01-1.938-2.493l.903-3.548a.5.5 0 00-.261-.57l-.661-.331-4.71 6.672c-.25.354-.57.645-.933.858zM5 11H3v8h2v-8z" />
    </Svg>
  );
}

export default SvgThumbUpLine;
