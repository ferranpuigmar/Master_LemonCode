<script lang="ts" setup>
import { Search } from '@lucide/vue';


withDefaults(defineProps<{
    placeholder?: string
}>(), {
    placeholder: 'Buscar casas...',
})

const model = defineModel<string>({ default: '' })

</script>

<template>
    <div class="border border-gray-200 rounded-sm bg-white flex items-center relative w-fit self-start min-w-sm">
        <Search class="w-5 h-5 text-gray-400 ml-2 absolute " />
        <input
            v-model="model"
            type="text"
            :placeholder="placeholder"
            class="
                px-4 py-2 pl-10 w-full
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            "
        />
    </div>
</template>