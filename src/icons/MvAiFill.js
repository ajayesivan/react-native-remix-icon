import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMvAiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM20 11a5.99 5.99 0 002-.341v9.348a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h11.35a5.99 5.99 0 00-.259 3H12v6.17A3 3 0 1014 15V8h.803A5.998 5.998 0 0020 11z" />
    </Svg>
  );
}

export default SvgMvAiFill;
