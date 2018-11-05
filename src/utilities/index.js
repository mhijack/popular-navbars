export default (function() {
    /*
        @param: {string} name
        @returns: {string} name capitalized
    */
    const capitalize = name => name[0].toUpperCase().concat(name.slice(1));

    /*
        @param: {string} path to component excluding component name (ignore trailing '/')
        @returns: a function that accepts
    */
    const concatComponentPath = (pathFromCurrentFile, name) => `${pathFromCurrentFile}${capitalize(name)}/${capitalize(name)}`;

    return {
        concatComponentPath,
        capitalize
    };
})();
