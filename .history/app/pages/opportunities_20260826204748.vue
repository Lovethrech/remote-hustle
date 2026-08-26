<script setup>
import { opportunities } from '~/data/opportunities'

useSeoMeta({
    title: 'Opportunities',
    description:
        'Explore Remote Hustle opportunities including internships, remote work training, certifications, jobs, placement support and competitions.'
})
</script>

<template>
    <main>
        <MoleculesPageHero
            eyebrow="Opportunities"
            title="Explore opportunities designed to help you grow."
            description="Discover practical ways to learn, gain experience, strengthen your profile and move closer to your career goals."
        />

        <section class="section opportunities">
            <div class="container">
                <div class="opportunities__grid">
                    <MoleculesOpportunityCard
                        v-for="(opportunity, index) in opportunities"
                        :key="opportunity.id"
                        :number="String(index + 1).padStart(2, '0')"
                        :title="opportunity.title"
                        :description="opportunity.description"
                    />
                </div>
            </div>
        </section>

        <FinalCta />
    </main>
</template>

<style scoped>
.opportunities {
  background: var(--color-white);
}

.opportunities__grid {
  display: grid;
  grid-template-columns: 1fr;

  gap: var(--space-4);
}

@media (min-width: 640px) {
  .opportunities__grid {
    grid-template-columns: repeat(2, 1fr);

    gap: var(--space-5);
  }
}

@media (min-width: 1024px) {
  .opportunities__grid {
    grid-template-columns: repeat(3, 1fr);

    gap: var(--space-6);
  }
}
</style>