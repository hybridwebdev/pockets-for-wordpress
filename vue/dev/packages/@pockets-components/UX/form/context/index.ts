// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { $formContainer, form } from "../types/index.ts"
 
let form: InjectionKey< form > = Symbol('pockets-form')

export let context = {
    inject: {
        form: ( defaultValue ) => injectStrict( form, defaultValue ),
    },
    provide: {
        form: (...args) => provide( form, ...args ),
    }
}
