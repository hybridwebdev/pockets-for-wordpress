import base from "./base.vue"
import type { optionsType } from "./type"

let optionsBase:optionsType = [
    "normal", 
    "italic", 
    "oblique", 
    "initial",
    "inherit"
].map(e => ( { text: e, value: e } ) )

let options = [ { text: "None", value: undefined } , ...optionsBase ]

export default {
    extends: base,
    setup: base.setup,
    props: {
        options: {
            default: options
        }
    },
}
