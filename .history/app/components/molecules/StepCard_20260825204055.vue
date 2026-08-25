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
  <article class="step-card">
    <div class="step-card__number">
      {{ number }}
    </div>

    <div class="step-card__content">
      <h3 class="step-card__title">
        {{ title }}
      </h3>

      <p class="step-card__description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.step-card {
  position: relative;

  display: grid;
  grid-template-columns: auto 1fr;

  gap: var(--space-4);

  padding: var(--space-6);

  background: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);

  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.step-card:hover {
  transform: translateY(-4px);

  border-color: var(--color-gray-300);

  box-shadow: var(--shadow-md);
}

.step-card__number {
  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  color: var(--color-white);
  background: var(--color-primary);

  border-radius: var(--radius-md);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

.step-card__content {
  min-width: 0;
}

.step-card__title {
  margin-bottom: var(--space-2);

  font-size: var(--font-size-xl);
}

.step-card__description {
  font-size: var(--font-size-base);
}
</style>