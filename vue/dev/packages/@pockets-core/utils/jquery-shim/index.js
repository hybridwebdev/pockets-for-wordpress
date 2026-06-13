/**
    tsconfig.json by default points to this via an alias
    eg import $ from "jQuery".

    This is done so it can used the global instance of jquery.
    If you want to use an import instead, just install as normal and import it in here. 
    Or change the alias in the tsconfig.json file. 
*/
let jQuery = window.$ ?? window.jQuery

export default jQuery;