const invariant = require('invariant');
const paths = require('from-dir');

module.exports = {
  getConfig(key, dc, requiredKeys) {
    invariant(key, 'A key is required.');
    invariant(dc, 'A default config is required.');

    if (paths.isNodePkg(paths.getAppRoot())) {
      const config = paths.getPkgJson(paths.getAppRoot())[key];
      invariant(config, `Config for ${key} missing in package.json`);
      if (config && requiredKeys) {
        requiredKeys.forEach((k) => {
          invariant(config[k], `Missing ${k} value from ${key} config.`);
        });
      }
      return Object.assign({}, dc, config);
    }
    return dc;
  },
};
