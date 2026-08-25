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
    <article class="feature-card">
        <div class="feature-card__number">
            {{ number }}
        </div>

        <h3 class="feature-card__title">
            {{ title }}
        </h3>

        <p class="feature-card__description">
            {{ description }}
        </p>
    </article>
</template>

<style scoped>
.feature-card {
    height: 100%;

    padding: var(--space-6);

    background: var(--color-white);

    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-lg);

    transition:
        transform var(--transition-base),
        box-shadow var(--transition-base),
        border-color var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-4px);

  border-color: var(--color-gray-300);

  box-shadow: var(--shadow-md);
}

.feature-card__number {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  margin-bottom: var(--space-5);

  color: var(--color-primary);

  background: var(--color-primary-light);

  border-radius: var(--radius-md);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

.feature-card__title {
  margin-bottom: var(--space-3);

  font-size: var(--font-size-xl);
}

.feature-card__description {
  font-size: var(--font-size-base);
}
</style>