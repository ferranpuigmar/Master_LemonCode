<script lang="ts" setup>
import { BedDouble } from '@lucide/vue';
import { eachDayOfInterval, parseISO, subDays } from 'date-fns';
import { storeToRefs } from 'pinia';
import BookingCalendar from '~/components/booking-calendar.vue';
import Drawer from '~/components/house-detail-drawer.vue';
import HouseDetailItem from '~/components/house-detail-item.vue';
import HouseDetailPrice from '~/components/house-detail-price.vue';
import { useBookingsStore } from '~/stores/bookings';
import { useHousesStore } from '~/stores/houses';
import { useUiStore } from '~/stores/ui';

const route = useRoute()
const houseId = route.params.id as string

const uiStore = useUiStore();
const { openBookingDrawer, closeBookingDrawer } = uiStore;
const { isBookingDrawer } = storeToRefs(uiStore);

const store = useHousesStore()
const { data: house } = await useAsyncData('house', () => store.getHouseById(houseId))
const { name, description, price, image, reviews, address, bedrooms, beds, bathrooms } = house?.value || {}

const bookingsStore = useBookingsStore()
const { addBooking, getBookingsByHouse } = bookingsStore

const occupiedDates = computed(() =>
  getBookingsByHouse(houseId).flatMap((booking) => 
    eachDayOfInterval({
      start: parseISO(booking.checkIn),
      end: subDays(parseISO(booking.checkOut), 1),
    })
  )
)

function confirmBooking(checkIn: Date, checkOut: Date) {
  if (!name) return
  addBooking({ id: houseId, name }, checkIn, checkOut)
  closeBookingDrawer()
}
</script>

<template>
    <div class="mt-10">
        <h1 class="text-2xl font-bold mb-8 flex items-center">
            <BedDouble class="size-9 mr-2"/>
            <span class="font-heading text-3xl">{{ name }}</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
            <NuxtImg :src="image" alt="House Image" class="w-full rounded-lg" width="600" height="400"/>
            <div class="divide-y divide-gray-300">
                <HouseDetailItem title="Descripción" :content="description"/>
                <HouseDetailItem title="Dirección" :content="address"/>
                <HouseDetailItem title="Habitaciones" :is-inline="true" :content="bedrooms"/>
                <HouseDetailItem title="Camas" :is-inline="true" :content="beds"/>
                <HouseDetailItem title="Baños" :is-inline="true" :content="bathrooms"/>
                <HouseDetailPrice :price="price" :click="openBookingDrawer" :isDisabled="isBookingDrawer"/>
            </div>
        </div>
        <Drawer :drawerIsOpen="isBookingDrawer" @onClose="closeBookingDrawer()" :title="name" :price="price">
            <BookingCalendar :price="price" :disabledDates="occupiedDates" @confirm="confirmBooking" />
        </Drawer>
    </div>
</template>