<script setup lang="ts">
import Header from '~/components/header.vue';
import Container from '~/components/layout/container.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow bg-bg-primary">
            <Container>
                <slot />
            </Container>
        </main>
    </div>
</template>