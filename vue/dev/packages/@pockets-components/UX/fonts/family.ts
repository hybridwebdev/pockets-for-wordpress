import base from "./base.vue"

let options = [
    { text: "None", value: undefined },
    { text: "Inter", value: 'Inter' },
]

export default {
    extends: base,
    setup: base.setup,
    props: {
        options: {
            default: options
        }
    }
}
