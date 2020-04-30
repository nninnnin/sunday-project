module.exports = function(api){
    const babelEnv = api.env();
    const babelVar = api.version;

    console.log(`-- 바벨(${babelVar}) 모드 : ${babelEnv} --`);

    const presets = ["@babel/preset-env","@babel/preset-react"];
    const plugins = ["react-hot-loader/babel"];

    return {
        presets,
        plugins
    }
}