const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#6AA2B8',
            '@layout-trigger-background': '#6AA2B8',
            '@layout-trigger-color': '#545759',
            '@layout-header-background': '#D2E2E8',
            '@layout-body-background': '#fff' },
    }),
);