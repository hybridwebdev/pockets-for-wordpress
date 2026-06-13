import { vOnClickOutside } from '@vueuse/components'

/**
    @description A directive that detects clicks outside of the target element. Uses VueUse's onClickOutside directive. For more information see <a href='https://vueuse.org/core/onClickOutside/'>onClickOutside</a>
    @property {boolean} [capture=false] If true, captures click event
*/
export default {
    ...vOnClickOutside
}