<script lang="ts" setup>
import { useHousesStore } from '~/stores/houses'
import { storeToRefs } from 'pinia'
import { BedDouble } from '@lucide/vue'
import HouseCard from '~/components/house-card.vue'
import SearchInput from '~/components/search-input.vue'
import { useHouseFilter } from '~/composables/useHouseFilter'

const store = useHousesStore()
const { list: houses } = storeToRefs(store)

const { filterQuery, filteredList } = useHouseFilter(houses)

const { pending, error } = await useAsyncData('houses', () => store.getHouses())
</script>

<template>
    <div class="mt-10">
        <h1 class="font-heading mb-6 text-3xl">
            <BedDouble class="inline-block mr-2 size-8" />
            Alojamientos
        </h1>

        <div v-if="pending" class="flex justify-center items-center h-64">
            <p class="font-heading">Loading...</p>
        </div>

        <div v-else-if="error" class="flex justify-center items-center h-64">
            <p class="font-heading">No se pudieron cargar las casas</p>
        </div>

        <div class="flex flex-col" v-else>
            <SearchInput v-model="filterQuery" placeholder="Buscar por nombre o ubicación..." class="mb-6" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="house in filteredList" :key="house.id">
                    <HouseCard :house="house" />
                </div>
            </div>
        </div>
    </div>

</template>