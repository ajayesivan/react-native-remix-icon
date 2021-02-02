import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgThumbUpLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.6 8H21a2 2 0 012 2v2.104a2 2 0 01-.15.762l-3.095 7.515a1 1 0 01-.925.619H2a1 1 0 01-1-1V10a1 1 0 011-1h3.482a1 1 0 00.817-.423L11.752.85a.5.5 0 01.632-.159l1.814.907a2.5 2.5 0 011.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 01-1.938-2.493l.903-3.548a.5.5 0 00-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z" />
    </Svg>
  );
}

export default SvgThumbUpLine;
