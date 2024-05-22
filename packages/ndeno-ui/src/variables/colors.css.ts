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
  primary: "#1E40AF",
  secondary: "#DB2777",
  background: "#EFF6FF",
  text: {
    normal: "#1F2937",
    dimmed: "#6B7280",
  },
});

export const darkTheme = createTheme(colors, {
  primary: "#60A5FA",
  secondary: "#F472B6",
  background: "#1F2937",
  text: {
    normal: "#F9FAFB",
    dimmed: "#D1D5DB",
  },
});

export const vars = { ...root, colors };

// .dark, .dark-theme {
//   --gray-1: #111113;
//   --gray-2: #19191b;
//   --gray-3: #222325;
//   --gray-4: #292a2e;
//   --gray-5: #303136;
//   --gray-6: #393a40;
//   --gray-7: #46484f;
//   --gray-8: #5f606a;
//   --gray-9: #6c6e79;
//   --gray-10: #797b86;
//   --gray-11: #b2b3bd;
//   --gray-12: #eeeef0;

//   --gray-a1: #1111bb03;
//   --gray-a2: #cbcbf90b;
//   --gray-a3: #d6e2f916;
//   --gray-a4: #d1d9f920;
//   --gray-a5: #d7ddfd28;
//   --gray-a6: #d9defc33;
//   --gray-a7: #dae2fd43;
//   --gray-a8: #e0e3fd60;
//   --gray-a9: #e0e4fd70;
//   --gray-a10: #e3e7fd7e;
//   --gray-a11: #eff0feb9;
//   --gray-a12: #fdfdffef;

//   --gray-contrast: #FFFFFF;
//   --gray-surface: rgba(0, 0, 0, 0.05);
//   --gray-indicator: #6c6e79;
//   --gray-track: #6c6e79;
// }

// @supports (color: color(display-p3 1 1 1)) {
//   @media (color-gamut: p3) {
//     .dark, .dark-theme {
//       --gray-1: oklch(17.8% 0.004 277.7);
//       --gray-2: oklch(21.5% 0.004 277.7);
//       --gray-3: oklch(25.5% 0.005 277.7);
//       --gray-4: oklch(28.4% 0.008 277.7);
//       --gray-5: oklch(31.4% 0.009 277.7);
//       --gray-6: oklch(35% 0.01 277.7);
//       --gray-7: oklch(40.2% 0.012 277.7);
//       --gray-8: oklch(49.2% 0.016 277.7);
//       --gray-9: oklch(54% 0.017 277.7);
//       --gray-10: oklch(58.6% 0.016 277.7);
//       --gray-11: oklch(77% 0.014 277.7);
//       --gray-12: oklch(94.9% 0.003 277.7);

//       --gray-a1: color(display-p3 0.067 0.067 0.941 / 0.009);
//       --gray-a2: color(display-p3 0.8 0.8 0.98 / 0.043);
//       --gray-a3: color(display-p3 0.851 0.898 0.988 / 0.085);
//       --gray-a4: color(display-p3 0.839 0.871 1 / 0.122);
//       --gray-a5: color(display-p3 0.847 0.875 1 / 0.156);
//       --gray-a6: color(display-p3 0.878 0.898 1 / 0.194);
//       --gray-a7: color(display-p3 0.875 0.906 0.996 / 0.257);
//       --gray-a8: color(display-p3 0.894 0.906 1 / 0.37);
//       --gray-a9: color(display-p3 0.89 0.91 1 / 0.433);
//       --gray-a10: color(display-p3 0.902 0.918 1 / 0.488);
//       --gray-a11: color(display-p3 0.945 0.949 1 / 0.719);
//       --gray-a12: color(display-p3 0.992 0.992 1 / 0.937);

//       --gray-contrast: #FFFFFF;
//       --gray-surface: color(display-p3 0 0 0 / 5%);
//       --gray-indicator: oklch(54% 0.017 277.7);
//       --gray-track: oklch(54% 0.017 277.7);
//     }
//   }
// }

// .dark, .dark-theme, :is(.dark, .dark-theme) :where(.radix-themes:not(.light, .light-theme)) {
//   --color-background: #111;
// }
