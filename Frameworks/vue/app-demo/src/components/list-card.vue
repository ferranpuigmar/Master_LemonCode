<template>
  <div :style="{ viewTransitionName: `card-${list.id}` }">
    <h2>{{ list?.title }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { List } from '@/types'

defineProps<{
  list: List
}>()
</script>
