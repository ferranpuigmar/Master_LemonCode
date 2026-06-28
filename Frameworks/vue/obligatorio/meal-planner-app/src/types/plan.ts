export const Weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] as const;
export type Weekday = typeof Weekdays[number];

export const MealMoments = ["Comida", "Cena"] as const;
export type MealMoment = typeof MealMoments[number];

export interface Plan {
    id: string;
    weekday: Weekday;
    mealMoment: MealMoment;
    dishId: string;
}