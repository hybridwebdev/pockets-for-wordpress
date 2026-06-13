// @ts-nocheck
import { InjectionKey, inject } from "vue"
import type { TreeNodeApi } from '@pockets-node-tree'

export let injectionKey: InjectionKey<TreeNodeApi> = Symbol('nodeApi')

export let useInject = ( fallback = false ) => inject( injectionKey, fallback ) ?? fallback
