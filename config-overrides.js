// 修改webpack默认配置，目的：按需引入antdesign
// 、、customize-cra包含很多api
const { override, fixBabelImports } = require('customize-cra');

const rewiredMap = () => config => {
    // config为所有的webpack配置
    config.output.publicPath="/e-ui"
    return config
}


module.exports = override(
    rewiredMap()
);