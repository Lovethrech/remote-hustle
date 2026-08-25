<template>
    <div class="app-shell">
        <SiteHeader />

        <div class="app-shell__content">
        <slot />
        </div>

        <SiteFooter />
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