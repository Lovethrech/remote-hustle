<script setup>
const steps = [
    {
        number: '01',
        title: 'Join',
        description: 'Register with Remote Hustle.'
    },
    {
        number: '02',
        title: 'Learn & Participate',
        description:
        'Take part in training, internships, competitions and other opportunities.'
    },
    {
        number: '03',
        title: 'Grow',
        description:
        'Build experience, get certified and access opportunities.'
    }
]
</script>

<template>
    <section class="section section--soft how-it-works">
        <div class="container">
            <div class="section-heading">
                <span class="section-heading__eyebrow">
                    How It Works
                </span>

                <h2 class="section-heading__title">
                    Start simple. Grow step by step.
                </h2>

                <p class="section-heading__description">
                    Remote Hustle is designed to help you move from learning
                    to practical experience and then into real opportunities.
                </p>
            </div>

            <div class="how-it-works__grid">
                <StepCard
                    v-for="step in steps"
                    :key="step.number"
                    :number="step.number"
                    :title="step.title"
                    :description="step.description"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.how-it-works__grid {
    display: grid;
    grid-template-columns: 1fr;

    gap: var(--space-4);
    }

@media (min-width: 768px) {
  .how-it-works__grid {
    grid-template-columns: repeat(3, 1fr);

    gap: var(--space-6);
  }
}
</style>