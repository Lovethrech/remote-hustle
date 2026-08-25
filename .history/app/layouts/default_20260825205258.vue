<template>
    <div class="app-shell">
        <OrganismsSiteHeader />

        <div class="app-shell__content">
            <slot />
        </div>

        <OrganismsSiteFooter />
    </div>
</template>

<style scoped>
.app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.app-shell__content {
    flex: 1;
}
</style>