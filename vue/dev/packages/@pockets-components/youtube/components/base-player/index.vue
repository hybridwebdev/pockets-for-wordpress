<template/>
<script lang="ts" setup>

import type { playerVars } from "../../types"
import { usePlayer } from './use-player'

let props = defineProps< playerVars >()

usePlayer( props )

</script>