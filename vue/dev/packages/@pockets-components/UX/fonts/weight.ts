import base from "./base.vue"
import type { optionsType } from "./type"

let optionsBase:optionsType = Array.from( { length: 8 }, (_, i) => i + 1)
    .map((e => ({ text: (e * 100).toString(), value: (e * 100).toString() } ) ) )

let options = [
    { text: "None", value: undefined },
    ...optionsBase
]

export default {
    extends: base,
    setup: base.setup,
    props: {
        options: {
            default: options
        }
    },
}
