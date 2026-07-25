<script type="ts" setup>
import Container from './layout/container.vue';
import Logo from './logo.vue'
</script>

<template>
    <header class="bg-bg-white border-b-2 border-b-border">
        <Container>
            <NuxtLink to="/">
                <div class="flex justify-between flex items-center h-16">
                    <Logo />
                </div>
            </NuxtLink>
        </Container>
    </header>
</template>