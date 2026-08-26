<script setup>
defineProps({
    number: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <article class="opportunity-card">
        <div class="opportunity-card__top">
            <span class="opportunity-card__number">
                {{ number }}
            </span>
        </div>

        <h2 class="opportunity-card__title">
            {{ title }}
        </h2>

        <p class="opportunity-card__description">
            {{ description }}
        </p>
    </article>
</template>

<style scoped>
.opportunity-card {
    height: 100%;
    padding: var(--space-6);
    background: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-lg);
    transition:
        transform var(--transition-base),
        border-color var(--transition-base),
        box-shadow var(--transition-base);
}

.opportunity-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-gray-300);
    box-shadow: var(--shadow-md);
}

.opportunity-card__top {
    margin-bottom: var(--space-5);
}

.opportunity-card__number {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    color: var(--color-primary);
    background: var(--color-primary-light);

    border-radius: var(--radius-md);

    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
}

.opportunity-card__title {
  margin-bottom: var(--space-3);

  font-size: var(--font-size-xl);
}

.opportunity-card__description {
  font-size: var(--font-size-base);
}
</style>