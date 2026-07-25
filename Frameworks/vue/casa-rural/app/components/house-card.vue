<script lang="ts" setup>
import type { House } from '~/types/house'

const props = defineProps<{
    house: House
}>()

const { public: { apiBase } } = useRuntimeConfig()
const imageSrc = `${apiBase}${props.house.image}`
</script>

<template>
    <NuxtLink :to="`/houses/${props.house.id}`" class="block">
        <div>
            <h3 class="font-heading mb-2 text-lg">{{ props.house.name }}</h3>
            <div class="border border-border rounded-lg">
                <div class="relative h-48 w-full overflow-hidden rounded-lg">
                    <NuxtImg :src="imageSrc" :alt="house.name" width="400" height="300"
                        class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </NuxtLink>

</template>