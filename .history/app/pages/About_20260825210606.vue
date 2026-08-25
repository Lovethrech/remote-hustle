<script setup>
useSeoMeta({
    title: 'About',
    description:
        'Learn what Remote Hustle is, who it serves, the problem it solves and its mission.'
})
</script>

<template>
    <main>
        <MoleculesPageHero
            eyebrow="About Remote Hustle"
            title="Helping people build practical skills and access real opportunities."
            description="Remote Hustle connects learning, experience and career opportunities in a simple and practical way."
        />

        <section class="section about">
            <div class="container">
                <div class="about__grid">
                    <article class="about__item">
                        <span class="about__number">
                            01
                        </span>

                        <div>
                            <h2 class="about__title">
                                What Remote Hustle Is
                            </h2>

                            <p>
                                Remote Hustle is a career development platform focused on
                                helping people build practical skills, gain experience,
                                earn professional certifications and discover opportunities.
                            </p>
                        </div>
                    </article>

                    <article class="about__item">
                        <span class="about__number">
                            02
                        </span>

                        <div>
                            <h2 class="about__title">
                                The Problem We Solve
                            </h2>

                            <p>
                                Many people struggle to move from learning into practical
                                experience and real career opportunities. Remote Hustle helps
                                bridge that gap by making useful training, internships,
                                certifications and career support easier to access.
                            </p>
                        </div>
                    </article>

                    <article class="about__item">
                        <span class="about__number">
                            03
                        </span>

                        <div>
                            <h2 class="about__title">
                                Who It Is For
                            </h2>

                            <p>
                                Remote Hustle is designed for students, graduates, early-career
                                professionals and anyone looking to improve their skills,
                                strengthen their CV and access better work opportunities.
                            </p>
                        </div>
                    </article>

                <article class="about__item">
                    <span class="about__number">
                    04
                    </span>

                    <div>
                    <h2 class="about__title">
                        Our Mission
                    </h2>

                    <p>
                        Our mission is to help people grow through practical learning,
                        real experience, professional development and access to
                        meaningful career opportunities.
                    </p>
                    </div>
                </article>
                </div>
            </div>
        </section>

        <FinalCta />
    </main>
</template>

<style scoped>
.about__grid {
  display: grid;

  gap: var(--space-5);
}

.about__item {
  display: grid;
  grid-template-columns: auto 1fr;

  gap: var(--space-5);

  padding: var(--space-6);

  background: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
}

.about__number {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  color: var(--color-primary);
  background: var(--color-primary-light);

  border-radius: var(--radius-md);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

.about__title {
  margin-bottom: var(--space-3);

  font-size: var(--font-size-xl);
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: repeat(2, 1fr);

    gap: var(--space-6);
  }

  .about__item {
    padding: var(--space-8);
  }
}
</style>