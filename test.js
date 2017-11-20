const mod = require('./index');

const defaultConfig = {
  jsonOutput: 'reports/lighthouse.json',
  htmlOutput: 'reports/lighthouse.html',
  mdOutput: 'reports/lighthouse.md',
};

console.log(mod.getConfig('lighthouse', defaultConfig, ['jsonOutput', 'htmlOutput', 'mdOutput']));
