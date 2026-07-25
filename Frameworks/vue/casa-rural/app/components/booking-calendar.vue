<script lang="ts" setup>
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { es } from 'date-fns/locale';
import { differenceInCalendarDays } from 'date-fns';
import BookingLegend from '~/components/booking-legend.vue';
import BookingSummary from '~/components/booking-summary.vue';

const props = defineProps<{
    price?: number;
    disabledDates?: Date[];
}>()

const emit = defineEmits<{
    confirm: [checkIn: Date, checkOut: Date];
}>()

const selectedRange = ref<[Date, Date] | null>(null)

const nights = computed(() => {
    if (!selectedRange.value?.[0] || !selectedRange.value?.[1]) return 0
    return differenceInCalendarDays(selectedRange.value[1], selectedRange.value[0])
})

function confirm() {
    if (!selectedRange.value || nights.value < 1) return
    const [checkIn, checkOut] = selectedRange.value
    emit('confirm', checkIn, checkOut)
    selectedRange.value = null
}
</script>

<template>
    <p class="font-heading text-lg mb-4">Selecciona las fechas de tu estancia</p>
    <ClientOnly>
        <VueDatePicker
            v-model="selectedRange"
            :range="{ noDisabledRange: true }"
            :disabled-dates="disabledDates ?? []"
            :highlight="{ dates: disabledDates ?? [], options: { highlightDisabled: true } }"
            :multi-calendars="{ solo: false, static: true, count: 2 }"
            inline
            auto-apply
            :locale="es"
            :time-config="{ enableTimePicker: false }"
            :min-date="new Date()"
            :month-change-on-scroll="false"
        />
    </ClientOnly>
    <BookingLegend />
    <BookingSummary :price="price" :nights="nights" />
    <button
        :disabled="nights < 1"
        @click="confirm"
        class="mt-6 w-full bg-accent text-white px-6 py-3 rounded enabled:hover:bg-accent-dark transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed">
        <span class="font-bold">Confirmar reserva</span>
    </button>
</template>
