<template>
    <section class="section final-cta">
        <div class="container">
            <div class="final-cta__box">
                <div class="final-cta__content">
                    <span class="final-cta__eyebrow">
                        Ready to move forward?
                    </span>

                    <h2 class="final-cta__title">
                        Your next opportunity could start here.
                    </h2>

                    <p class="final-cta__description">
                        Join Remote Hustle and start building practical skills,
                        experience and access to career opportunities.
                    </p>
                </div>

                <div class="final-cta__action">
                <BaseButton
                    to="/register"
                    variant="primary"
                    size="lg"
                >
                    Get Started
                </BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.final-cta {
  background: var(--color-white);
}

.final-cta__box {
  position: relative;
  overflow: hidden;

  display: grid;
  gap: var(--space-8);

  padding: var(--space-8);

  background: var(--color-secondary);

  border-radius: var(--radius-xl);
}

.final-cta__box::after {
  content: "";

  position: absolute;
  top: -80px;
  right: -80px;

  width: 220px;
  height: 220px;

  background: rgba(37, 99, 235, 0.22);

  border-radius: 50%;
}

.final-cta__content {
  position: relative;
  z-index: 1;

  max-width: 680px;
}

.final-cta__eyebrow {
  display: inline-block;

  margin-bottom: var(--space-3);

  color: #93c5fd;

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.final-cta__title {
  margin-bottom: var(--space-4);

  color: var(--color-white);

  font-size: clamp(2rem, 5vw, 3rem);
}

.final-cta__description {
  color: var(--color-gray-300);

  font-size: var(--font-size-lg);
}

.final-cta__action {
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .final-cta__box {
    grid-template-columns: 1fr auto;
    align-items: center;

    padding: var(--space-12);
  }
}
</style>