import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from "@vanilla-extract/css";

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    normal: null,
    dimmed: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: "#",
  secondary: "#",
  background: "#",
  text: {
    normal: "#",
    dimmed: "#",
  },
});

export const darkTheme = createTheme(colors, {
  primary: "#",
  secondary: "#",
  background: "#19191b",
  text: {
    normal: "#",
    dimmed: "#",
  },
});

export const vars = { ...root, colors };

// :root, .light, .light-theme {
//   --green-1: #fbfefc;
//   --green-2: #f3fbf7;
//   --green-3: #e4f7ed;
//   --green-4: #d3f1e3;
//   --green-5: #c0e9d6;
//   --green-6: #a8dfc6;
//   --green-7: #87cfb0;
//   --green-8: #53ba92;
//   --green-9: #01a275;
//   --green-10: #00946a;
//   --green-11: #008259;
//   --green-12: #193b2d;

//   --green-a1: #00c04004;
//   --green-a2: #00aa550c;
//   --green-a3: #00b4551b;
//   --green-a4: #00ae5d2c;
//   --green-a5: #00a65a3f;
//   --green-a6: #00a25857;
//   --green-a7: #00995878;
//   --green-a8: #00995eac;
//   --green-a9: #00a274fe;
//   --green-a10: #00946a;
//   --green-a11: #008259;
//   --green-a12: #002616e6;

//   --green-contrast: #fff;
//   --green-surface: #f0faf5cc;
//   --green-indicator: #01a275;
//   --green-track: #01a275;
// }

// @supports (color: color(display-p3 1 1 1)) {
//   @media (color-gamut: p3) {
//     :root, .light, .light-theme {
//       --green-1: oklch(99.4% 0.004 164.9);
//       --green-2: oklch(98.2% 0.01 164.9);
//       --green-3: oklch(95.9% 0.024 164.9);
//       --green-4: oklch(93.3% 0.037 164.9);
//       --green-5: oklch(90% 0.051 164.9);
//       --green-6: oklch(85.8% 0.066 164.9);
//       --green-7: oklch(79.9% 0.086 164.9);
//       --green-8: oklch(71.7% 0.114 164.9);
//       --green-9: oklch(63.1% 0.133 164.9);
//       --green-10: oklch(59% 0.126 164.9);
//       --green-11: oklch(52.9% 0.133 164.9);
//       --green-12: oklch(32.3% 0.048 164.9);

//       --green-a1: color(display-p3 0.024 0.675 0.024 / 0.012);
//       --green-a2: color(display-p3 0.02 0.647 0.29 / 0.044);
//       --green-a3: color(display-p3 0.012 0.616 0.271 / 0.091);
//       --green-a4: color(display-p3 0.008 0.608 0.294 / 0.15);
//       --green-a5: color(display-p3 0.004 0.584 0.275 / 0.216);
//       --green-a6: color(display-p3 0.004 0.557 0.267 / 0.299);
//       --green-a7: color(display-p3 0.004 0.522 0.263 / 0.408);
//       --green-a8: color(display-p3 0 0.51 0.267 / 0.565);
//       --green-a9: color(display-p3 0 0.482 0.263 / 0.718);
//       --green-a10: color(display-p3 0 0.427 0.231 / 0.746);
//       --green-a11: color(display-p3 0 0.361 0.18 / 0.781);
//       --green-a12: color(display-p3 0 0.11 0.055 / 0.867);

//       --green-contrast: #fff;
//       --green-surface: color(display-p3 0.953 0.98 0.965 / 0.8);
//       --green-indicator: oklch(63.1% 0.133 164.9);
//       --green-track: oklch(63.1% 0.133 164.9);
//     }
//   }
// }

// .dark, .dark-theme {
//   --green-1: #0b1310;
//   --green-2: #111b17;
//   --green-3: #102d21;
//   --green-4: #0a3c2a;
//   --green-5: #0f4935;
//   --green-6: #185841;
//   --green-7: #20694e;
//   --green-8: #247e5e;
//   --green-9: #01a275;
//   --green-10: #009569;
//   --green-11: #54d2a2;
//   --green-12: #a9f2d1;

//   --green-a1: #00bb0003;
//   --green-a2: #12f99d0b;
//   --green-a3: #09ff991e;
//   --green-a4: #00fb992f;
//   --green-a5: #09ffaa3c;
//   --green-a6: #29fdb04d;
//   --green-a7: #39fdb55f;
//   --green-a8: #3bffb975;
//   --green-a9: #00feb49c;
//   --green-a10: #00feaf8e;
//   --green-a11: #64ffc4cf;
//   --green-a12: #b1fedbf2;

//   --green-contrast: #fff;
//   --green-surface: #11251d80;
//   --green-indicator: #01a275;
//   --green-track: #01a275;
// }

// @supports (color: color(display-p3 1 1 1)) {
//   @media (color-gamut: p3) {
//     .dark, .dark-theme {
//       --green-1: oklch(17.8% 0.014 164.9);
//       --green-2: oklch(21.2% 0.018 164.9);
//       --green-3: oklch(27.1% 0.042 164.9);
//       --green-4: oklch(31.7% 0.06 164.9);
//       --green-5: oklch(36.4% 0.069 164.9);
//       --green-6: oklch(41.2% 0.075 164.9);
//       --green-7: oklch(46.8% 0.084 164.9);
//       --green-8: oklch(53.1% 0.098 164.9);
//       --green-9: oklch(63.1% 0.133 164.9);
//       --green-10: oklch(59% 0.133 164.9);
//       --green-11: oklch(78.2% 0.133 164.9);
//       --green-12: oklch(90.4% 0.085 164.9);

//       --green-a1: color(display-p3 0 0.941 0 / 0.009);
//       --green-a2: color(display-p3 0.251 0.98 0.616 / 0.043);
//       --green-a3: color(display-p3 0.31 0.996 0.655 / 0.114);
//       --green-a4: color(display-p3 0.267 1 0.643 / 0.177);
//       --green-a5: color(display-p3 0.357 1 0.694 / 0.232);
//       --green-a6: color(display-p3 0.427 1 0.733 / 0.295);
//       --green-a7: color(display-p3 0.463 1 0.741 / 0.366);
//       --green-a8: color(display-p3 0.478 1 0.757 / 0.45);
//       --green-a9: color(display-p3 0.424 1 0.737 / 0.601);
//       --green-a10: color(display-p3 0.412 1 0.718 / 0.547);
//       --green-a11: color(display-p3 0.573 1 0.796 / 0.799);
//       --green-a12: color(display-p3 0.769 1 0.878 / 0.937);

//       --green-contrast: #fff;
//       --green-surface: color(display-p3 0.078 0.141 0.11 / 0.5);
//       --green-indicator: oklch(63.1% 0.133 164.9);
//       --green-track: oklch(63.1% 0.133 164.9);
//     }
//   }
// }

// :root, .light, .light-theme {
//   --gray-1: #fcfcfd;
//   --gray-2: #f9f9fb;
//   --gray-3: #eff0f3;
//   --gray-4: #e7e8ec;
//   --gray-5: #e0e1e6;
//   --gray-6: #d8d9e0;
//   --gray-7: #cdced7;
//   --gray-8: #b9bbc6;
//   --gray-9: #8b8d98;
//   --gray-10: #80828d;
//   --gray-11: #62636c;
//   --gray-12: #1e1f24;

//   --gray-a1: #00005503;
//   --gray-a2: #00005506;
//   --gray-a3: #00104010;
//   --gray-a4: #000b3618;
//   --gray-a5: #0009321f;
//   --gray-a6: #00073527;
//   --gray-a7: #00063332;
//   --gray-a8: #00083046;
//   --gray-a9: #00051d74;
//   --gray-a10: #00051b7f;
//   --gray-a11: #0002119d;
//   --gray-a12: #000107e1;

//   --gray-contrast: #FFFFFF;
//   --gray-surface: #ffffffcc;
//   --gray-indicator: #8b8d98;
//   --gray-track: #8b8d98;
// }

// @supports (color: color(display-p3 1 1 1)) {
//   @media (color-gamut: p3) {
//     :root, .light, .light-theme {
//       --gray-1: oklch(99.1% 0.001 277.7);
//       --gray-2: oklch(98.2% 0.003 277.7);
//       --gray-3: oklch(95.6% 0.005 277.7);
//       --gray-4: oklch(93.1% 0.006 277.7);
//       --gray-5: oklch(91% 0.008 277.7);
//       --gray-6: oklch(88.8% 0.009 277.7);
//       --gray-7: oklch(85.3% 0.012 277.7);
//       --gray-8: oklch(79.4% 0.016 277.7);
//       --gray-9: oklch(64.6% 0.016 277.7);
//       --gray-10: oklch(61% 0.016 277.7);
//       --gray-11: oklch(50.3% 0.014 277.7);
//       --gray-12: oklch(24.1% 0.01 277.7);

//       --gray-a1: color(display-p3 0.024 0.024 0.349 / 0.012);
//       --gray-a2: color(display-p3 0.024 0.024 0.349 / 0.024);
//       --gray-a3: color(display-p3 0.008 0.067 0.255 / 0.063);
//       --gray-a4: color(display-p3 0.012 0.051 0.216 / 0.095);
//       --gray-a5: color(display-p3 0.004 0.039 0.2 / 0.122);
//       --gray-a6: color(display-p3 0.004 0.027 0.18 / 0.153);
//       --gray-a7: color(display-p3 0.008 0.027 0.184 / 0.197);
//       --gray-a8: color(display-p3 0.004 0.031 0.176 / 0.275);
//       --gray-a9: color(display-p3 0.004 0.02 0.106 / 0.455);
//       --gray-a10: color(display-p3 0.004 0.02 0.098 / 0.499);
//       --gray-a11: color(display-p3 0 0.008 0.059 / 0.616);
//       --gray-a12: color(display-p3 0 0.004 0.027 / 0.883);

//       --gray-contrast: #FFFFFF;
//       --gray-surface: color(display-p3 1 1 1 / 80%);
//       --gray-indicator: oklch(64.6% 0.016 277.7);
//       --gray-track: oklch(64.6% 0.016 277.7);
//     }
//   }
// }

// :root, .light, .light-theme, .radix-themes {
//   --color-background: #fff;
// }

// .dark, .dark-theme, :is(.dark, .dark-theme) :where(.radix-themes:not(.light, .light-theme)) {
//   --color-background: #111;
// }
