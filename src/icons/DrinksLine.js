import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDrinksLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 2H6.205a1.25 1.25 0 00-1.226 1.005L4.18 7H2v2h2.109L5.48 20.893A1.25 1.25 0 006.723 22h10.554a1.25 1.25 0 001.242-1.107L19.89 9H22V7h-2.18l-.8-3.995A1.25 1.25 0 0017.796 2H16V0h-2v2zm3.78 5H6.22l.6-3h10.36l.6 3zM6.122 9h11.756l-1.27 11H7.392L6.122 9z" />
    </Svg>
  );
}

export default SvgDrinksLine;
