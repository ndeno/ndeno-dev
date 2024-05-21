import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
    });
  },
};
export default config;

// import type { StorybookConfig } from "@storybook/react-vite";

// import { join, dirname } from "path";
// import { mergeConfig } from "vite";

// // const { mergeConfig } = ("vite");

// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, "package.json")));
// }

// // /**
// //  * This function is used to resolve the absolute path of a package.
// //  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
// //  */

// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     getAbsolutePath("@storybook/addon-onboarding"),
//     getAbsolutePath("@storybook/addon-links"),
//     getAbsolutePath("@storybook/addon-essentials"),
//     getAbsolutePath("@chromatic-com/storybook"),
//     getAbsolutePath("@chromatic-com/storybook"),
//     getAbsolutePath(""),
//   ],
//   framework: {
//     name: getAbsolutePath("@storybook/react-vite"),
//     options: {},
//   },
//   // name: getAbsolutePath("@storybook/react-vite"),
//   core: {
//     builder: "@storybook/builder-vite",
//   },
//   // features: {
//   //   storyStoreV7: true,
//   // },
//   async viteFinal(config) {
//     return mergeConfig(config, {
//       plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
//     });
//   },
// };
// export default config;

// // module.exports = {
// //   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
// //   addons: [
// //     "@storybook/addon-links",
// //     "@storybook/addon-essentials",
// //     "@storybook/addon-interactions",
// //   ],
// //   // name: getAbsolutePath("@storybook/react-vite"),
// //   // core: {
// //   //   builder: "@storybook/builder-vite",
// //   // },
// //   // features: {
// //   //   storyStoreV7: true,
// //   // },
// //   // async viteFinal(config) {
// //   //   return mergeConfig(config, {
// //   //     plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
// //   //   });
// //   // },
// // };
