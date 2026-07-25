import type { List } from "@/types";
import { defineStore } from "pinia"
import { ref } from "vue";

export const useListStore = defineStore('lists', () => {
  const lists = ref<List[]>([])

  const createList = async (title: string) => {
    const newList: List = {
      id: crypto.randomUUID(),
      title,
      position: lists.value.length + 1,
      createdAt: new Date().toISOString(),
    }
    lists.value.push(newList)

    return newList;
  }

  const updateList = async (listId: string, updatedFields: Partial<List>) => {
    const list = lists.value.find(list => list.id === listId);
    if (list) {
      Object.assign(list, updatedFields);
    }
  }

  return { lists, createList, updateList }
});

