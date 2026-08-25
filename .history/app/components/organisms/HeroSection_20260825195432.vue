<template>
    <section class="hero">
        <div class="container hero__inner">
            <div class="hero__content">
                <span class="hero__eyebrow">
                    Learn. Build. Grow.
                </span>

                <h1 class="hero__title">
                    Build Skills.
                <br>
                Get Experience.
                <br>
                <span>Find Opportunities.</span>
                </h1>

                <p class="hero__description">
                Remote Hustle helps you develop practical skills,
                gain experience, get certified and access career opportunities.
                </p>

                <div class="hero__actions">
                <NuxtLink
                    to="/register"
                    class="hero__button hero__button--primary"
                >
                    Register Now
                </NuxtLink>

                <NuxtLink
                    to="/opportunities"
                    class="hero__button hero__button--secondary"
                >
                    Explore Opportunities
                </NuxtLink>
                </div>

                <div class="hero__trust">
                <span class="hero__trust-dot" />

                <p>
                    Practical pathways for skills, experience and career growth.
                </p>
                </div>
            </div>

            <div
                class="hero__visual"
                aria-hidden="true"
            >
                <div class="hero__visual-card hero__visual-card--main">
                <span class="hero__visual-label">
                    Your growth journey
                </span>

                <div class="hero__visual-item">
                    <div class="hero__visual-number">
                    01
                    </div>

                    <div>
                    <strong>Build Skills</strong>
                    <p>Learn practical digital skills.</p>
                    </div>
                </div>

                <div class="hero__visual-item">
                    <div class="hero__visual-number">
                    02
                    </div>

                    <div>
                    <strong>Gain Experience</strong>
                    <p>Participate in practical opportunities.</p>
                    </div>
                </div>

                <div class="hero__visual-item">
                    <div class="hero__visual-number">
                    03
                    </div>

                    <div>
                    <strong>Grow Your Career</strong>
                    <p>Access jobs and career opportunities.</p>
                    </div>
                </div>
                </div>

                <div class="hero__floating-card hero__floating-card--top">
                <span>Remote</span>
                <strong>Opportunities</strong>
                </div>

                <div class="hero__floating-card hero__floating-card--bottom">
                <span>Professional</span>
                <strong>Certification</strong>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;

  padding-block: var(--space-16);

  background:
    radial-gradient(
      circle at 90% 20%,
      rgba(37, 99, 235, 0.12),
      transparent 35%
    ),
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-gray-50) 100%
    );
}

.hero__inner {
  display: grid;
  gap: var(--space-12);

  align-items: center;
}

.hero__content {
  max-width: 700px;
}

.hero__eyebrow {
  display: inline-flex;

  margin-bottom: var(--space-4);

  padding: var(--space-2) var(--space-4);

  color: var(--color-primary);

  background: var(--color-primary-light);

  border-radius: var(--radius-pill);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.hero__title {
  margin-bottom: var(--space-6);
}

.hero__title span {
  color: var(--color-primary);
}

.hero__description {
  max-width: 620px;

  margin-bottom: var(--space-8);

  font-size: var(--font-size-lg);
}

.hero__actions {
  display: flex;
  flex-direction: column;

  gap: var(--space-3);
}

.hero__button {
  min-height: 52px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding-inline: var(--space-6);

  border-radius: var(--radius-md);

  font-weight: var(--font-weight-semibold);

  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.hero__button:hover {
  transform: translateY(-2px);
}

.hero__button--primary {
  color: var(--color-white);
  background: var(--color-primary);
}

.hero__button--primary:hover {
  background: var(--color-primary-dark);
}

.hero__button--secondary {
  color: var(--color-gray-900);
  background: var(--color-white);

  border: 1px solid var(--color-gray-300);
}

.hero__button--secondary:hover {
  border-color: var(--color-primary);
}

.hero__trust {
  display: flex;
  align-items: center;

  gap: var(--space-3);

  margin-top: var(--space-6);
}

.hero__trust p {
  font-size: var(--font-size-sm);
}

.hero__trust-dot {
  width: 9px;
  height: 9px;

  flex-shrink: 0;

  background: var(--color-success);

  border-radius: 50%;
}

/* Visual */

.hero__visual {
  position: relative;

  min-height: 380px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__visual-card {
  width: min(100%, 380px);

  padding: var(--space-6);

  background: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-xl);

  box-shadow: var(--shadow-lg);
}

.hero__visual-label {
  display: inline-block;

  margin-bottom: var(--space-6);

  color: var(--color-primary);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.hero__visual-item {
  display: grid;
  grid-template-columns: auto 1fr;

  align-items: start;

  gap: var(--space-4);

  padding-block: var(--space-4);

  border-bottom: 1px solid var(--color-gray-100);
}

.hero__visual-item:last-child {
  border-bottom: 0;
}

.hero__visual-number {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  color: var(--color-primary);

  background: var(--color-primary-light);

  border-radius: var(--radius-md);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

.hero__visual-item strong {
  display: block;

  margin-bottom: var(--space-1);
}

.hero__visual-item p {
  font-size: var(--font-size-sm);
}

.hero__floating-card {
  position: absolute;

  display: none;

  padding: var(--space-3) var(--space-4);

  background: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-md);
}

.hero__floating-card span,
.hero__floating-card strong {
  display: block;
}

.hero__floating-card span {
  color: var(--color-gray-500);

  font-size: var(--font-size-xs);
}

.hero__floating-card strong {
  font-size: var(--font-size-sm);
}

@media (min-width: 640px) {
  .hero__actions {
    flex-direction: row;
  }

  .hero__button {
    width: auto;
  }
}

@media (min-width: 900px) {
  .hero {
    padding-block: var(--space-20);
  }

  .hero__inner {
    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(320px, 0.9fr);

    gap: var(--space-16);
  }

  .hero__visual {
    min-height: 500px;
  }

  .hero__floating-card {
    display: block;
  }

  .hero__floating-card--top {
    top: 13%;
    right: 0;
  }

  .hero__floating-card--bottom {
    bottom: 13%;
    left: 0;
  }
}
</style>