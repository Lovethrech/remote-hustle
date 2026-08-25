<script setup>
const offers = [
    {
        number: '01',
        title: 'Training',
        description:
        "Learn practical skills for today's digital workplace."
    },
    {
        number: '02',
        title: 'Jobs & Placement',
        description:
        'Discover opportunities and receive support with job applications.'
    },
    {
        number: '03',
        title: 'Internships',
        description:
        'Gain practical experience by working on real projects.'
    },
    {
        number: '04',
        title: 'Certification',
        description:
        'Earn professional certifications that strengthen your CV.'
    }
]
</script>

<template>
    <section class="section offer-section">
        <div class="container">
            <div class="section-heading section-heading--center">
                <span class="section-heading__eyebrow">
                    What We Offer
                </span>

                <h2 class="section-heading__title">
                    Practical support for your career journey
                </h2>

                <p class="section-heading__description">
                    Build the skills, experience and credentials you need
                    to move forward professionally.
                </p>
            </div>

            <div class="offer-section__grid">
                <FeatureCard
                    v-for="offer in offers"
                    :key="offer.title"
                    :number="offer.number"
                    :title="offer.title"
                    :description="offer.description"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.offer-section {
  background: var(--color-white);
}

.offer-section__grid {
  display: grid;
  grid-template-columns: 1fr;

  gap: var(--space-4);
}

@media (min-width: 640px) {
  .offer-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .offer-section__grid {
    grid-template-columns: repeat(4, 1fr);

    gap: var(--space-6);
  }
}
</style>