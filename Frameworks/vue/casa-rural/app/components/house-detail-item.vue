<script lang="ts" setup>

const { title, isInline = false, content } = defineProps<{
    title: string
    isInline?: boolean
    content?: string | number
}>()

const wrapperClasses = computed(() => {
    return {
        'flex-row items-center': isInline
    }
})

const titleClasses = computed(() => {
    return {
        'mb-2': !isInline,
        'mr-2 mb-0': isInline
    }
})
</script>

<template>
    <div v-if="content" class="flex flex-col mb-4 pb-5" :class="wrapperClasses">
        <h2 class="text-lg font-bold" :class="titleClasses">{{ title }}<span v-if="isInline">:</span></h2>
        <p>{{ content }}</p>
    </div>
</template>