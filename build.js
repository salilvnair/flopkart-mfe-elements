const execSync = require("child_process").execSync;
const path = require('path');

var SEPARATOR = process.platform === "win32" ? ";" : ":",
    env = Object.assign({}, process.env);

env.PATH = path.resolve("./node_modules/.bin") + SEPARATOR + env.PATH;

let appName = process.env.MFE_NAME;
console.log(appName);
if("FLOPKART_CART"===appName) {
  execute("npm run build-cart && npm run pack-cart && npm run clean-cart");
}
else {
  execute("npm run build-home && npm run pack-home && npm run clean-home");
}

function execute(cmd) {
    var output = execSync(cmd, {
        cwd: process.cwd(),
        env: env,
        stdio: 'inherit'
    });
    console.log(output);
}
