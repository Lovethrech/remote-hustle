<script setup>
defineProps({
    eyebrow: {
        type: String,
        default: ''
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <section class="page-hero">
        <div class="container">
            <div class="page-hero__content">
                <span
                    v-if="eyebrow"
                    class="page-hero__eyebrow"
                >
                    {{ eyebrow }}
                </span>

                <h1 class="page-hero__title">
                    {{ title }}
                </h1>

                <p
                    v-if="description"
                    class="page-hero__description"
                >
                    {{ description }}
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-hero {
    padding-block:
        var(--space-12)
        var(--space-10);
    background:
        radial-gradient(
        circle at 90% 20%,
        rgba(37, 99, 235, 0.1),
        transparent 35%
        ),
        var(--color-gray-50);

    border-bottom: 1px solid var(--color-gray-200);
}

.page-hero__content {
  max-width: 760px;
}

.page-hero__eyebrow {
  display: inline-block;

  margin-bottom: var(--space-3);

  color: var(--color-primary);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);

  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.page-hero__title {
  margin-bottom: var(--space-4);

  font-size: clamp(2.25rem, 7vw, 4rem);
}

.page-hero__description {
  max-width: 680px;

  font-size: var(--font-size-lg);
}

@media (min-width: 768px) {
  .page-hero {
    padding-block:
      var(--space-16)
      var(--space-12);
  }
}
</style>