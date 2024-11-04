import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBootstrapLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 11v2s2 0 2 4v1a3 3 0 003 3h12a3 3 0 003-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 00-3-3H6a3 3 0 00-3 3v1c0 4-2 4-2 4zm19.674 1c-.03.028-.059.056-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1c0-2.308-.578-3.907-1.586-4.914A3.887 3.887 0 003.326 12c.03-.028.059-.056.088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 011-1h12a1 1 0 011 1v1c0 2.308.578 3.907 1.586 4.914l.088.086zM8.5 7v10h5a3 3 0 001.615-5.529A3 3 0 0012.5 7h-4zm2 4V9h2a1 1 0 110 2h-2zm0 2h3a1 1 0 110 2h-3v-2z" />
    </Svg>
  );
}

export default SvgBootstrapLine;
