const path = require('path');


module.exports = {
    entry: "./front/entry.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader'}
        ]
    }
};
