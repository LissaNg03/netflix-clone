<!-- @format -->

width:
w-full = width: 100%;
h-full = height: 100%
w-screen = width: 100vw;
h-screen = height: 100vw;
w-fit = width: fit-content;

background = bg-color-100 to bg-color-1000
flex = display:flex
grid = display:grid
relative = position:relative
gap-y = gap-inline:

size-12 = width and height;

////////////////////////////////////////////
There are five breakpoints by default, inspired by common device resolutions:

Breakpoint prefix Minimum width CSS
sm 40rem (640px) @media (width >= 40rem) { ... }
md 48rem (768px) @media (width >= 48rem) { ... }
lg 64rem (1024px) @media (width >= 64rem) { ... }
xl 80rem (1280px) @media (width >= 80rem) { ... }
2xl 96rem (1536px) @media (width >= 96rem) { ... }

CUSTOM MEDIA QUERRIES:

// tailwind.config.js
export default {
theme: {
extend: {
screens: {
'xs': '420px', // new small screen
'3xl': '1600px', // extra large screen
'tall': { 'raw': '(min-height: 800px)' }, // height-based
'hover-none': { 'raw': '(hover: none)' }, // raw media query
},
},
},
};

/////////////////////////////////

aspect-ratio
Utilities for controlling the aspect ratio of an element.

Class
Styles
aspect-<ratio>
aspect-ratio: <ratio>;
aspect-square
aspect-ratio: 1 / 1;
aspect-video
aspect-ratio: var(--aspect-ratio-video); /_ 16 / 9 _/
aspect-auto
aspect-ratio: auto;
aspect-(<custom-property>)
aspect-ratio: var(<custom-property>);
aspect-[<value>]
aspect-ratio: <value>;

///////////////////////////////////////

place-content-center
place-content: center;
place-content-center-safe
place-content: safe center;
place-content-start
place-content: start;
place-content-end
place-content: end;
place-content-end-safe
place-content: safe end;
place-content-between
place-content: space-between;
place-content-around
place-content: space-around;
place-content-evenly
place-content: space-evenly;
place-content-baseline
place-content: baseline;
place-content-stretch
place-content: stretch;
