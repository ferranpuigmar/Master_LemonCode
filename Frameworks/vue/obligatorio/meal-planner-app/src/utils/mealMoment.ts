import type { MealMoment } from "@/types";
import { Moon, Sun } from "@lucide/vue";

export const mealIcons: Record<MealMoment, any> = {
  Comida: Sun,
  Cena: Moon,
};