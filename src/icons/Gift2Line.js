import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGift2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.505 2.003a3.5 3.5 0 013.163 5h3.337a1 1 0 011 1v4a1 1 0 01-1 1h-1v8a1 1 0 01-1 1h-14a1 1 0 01-1-1v-8h-1a1 1 0 01-1-1v-4a1 1 0 011-1h3.337a3.5 3.5 0 015.664-3.95 3.48 3.48 0 012.499-1.05zm3.5 11h-12v7h12v-7zm2-4h-16v2h16v-2zm-10.5-5a1.5 1.5 0 00-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 009.649 4.01l-.144-.007zm5 0l-.145.007a1.5 1.5 0 00-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 000-2.986l-.144-.007z" />
    </Svg>
  );
}

export default SvgGift2Line;
