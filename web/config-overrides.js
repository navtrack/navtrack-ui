const path = require("path");

const sharedRepoPath = path.resolve("../shared/src");

module.exports = function override(config, env) {
  // Remove ModuleScopePlugin
  config.resolve.plugins = config.resolve.plugins.filter((plugin) => {
    return plugin.constructor.name !== "ModuleScopePlugin";
  });

  // Enable compiling outside of src/
  config.module.rules[1].oneOf = config.module.rules[1].oneOf.map((rule) => {
    if (rule.loader && rule.loader.match(/\/babel-loader\//) && rule.include) {
      return {
        ...rule,
        include: [rule.include, sharedRepoPath],
      };
    }

    return rule;
  });

  // Mirror TypeScript @shared path in webpack
  config.resolve.alias["@shared"] = sharedRepoPath;

  return config;
};
