<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/header.vue";
import Container from "@/components/container.vue";
</script>

<template>
    <div class="min-h-screen dvh-100 bg-gray-100 flex flex-col justify-start">
        <Header />
        <main class="flex flex-col flex-1 items-stretch">
            <Container :class-name="'flex flex-col flex-1'">
                <RouterView />
            </Container>
        </main>
    </div>
</template>