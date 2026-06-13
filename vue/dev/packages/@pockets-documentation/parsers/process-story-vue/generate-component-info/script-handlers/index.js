
// https://github.com/vue-styleguidist/vue-styleguidist/issues/1399

module.exports.componentDescription = function (
    documentation,
    componentDefinition,
    astPath,
    opt
) {
    const componentDoc = astPath.tokens.filter(token => token.type === 'CommentBlock' && token.value.includes('@component-description')).find(() => true);

    if ( componentDoc ) {

        const lines = componentDoc.value.split('\n');
        documentation.set('description', lines.filter(line => !line.includes('@component-description')).map(line => line.substring(componentDoc.loc.indent)).join('\n'));

    }

}

module.exports.defineModelHandler = function(documentation, componentDefinition) {
   
}