import type { HouseDTO } from "~/types/house";
import { houseMapper } from "~/utils/house.mapper";

export const useHouseApi = () => {
    const { public: { apiBase } } = useRuntimeConfig();

    const getHouses = async () => {
        return await $fetch<HouseDTO[]>(`${apiBase}/api/houses`);
    };

    const getHouseById = async (id: string) => {
        const response = await $fetch<HouseDTO>(`${apiBase}/api/houses/${id}`);

        return houseMapper(response, apiBase);
    };

    return { getHouses, getHouseById };
}