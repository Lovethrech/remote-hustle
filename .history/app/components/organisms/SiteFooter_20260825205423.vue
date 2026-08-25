<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Opportunities', to: '/opportunities' },
    { label: 'Products', to: '/products' },
    { label: 'Register', to: '/register' }
]
</script>

<template>
    <footer class="site-footer">
        <div class="container">
            <div class="site-footer__top">
                <div class="site-footer__brand">
                    <NuxtLink
                        to="/"
                        class="site-footer__logo"
                    >
                        Remote Hustle
                    </NuxtLink>

                    <p class="site-footer__description">
                        Build practical skills, gain experience, get certified
                        and access career opportunities.
                    </p>
                </div>

                <nav
                    class="site-footer__nav"
                    aria-label="Footer navigation"
                >
                    <NuxtLink
                        v-for="link in footerLinks"
                        :key="link.to"
                        :to="link.to"
                        class="site-footer__link"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>

                <div class="site-footer__cta">
                <p class="site-footer__cta-label">
                    Ready to get started?
                </p>

                <BaseButton
                    to="/register"
                    variant="primary"
                    size="md"
                >
                    Register Now
                </BaseButton>
                </div>
            </div>

            <div class="site-footer__bottom">
                <p>
                © {{ currentYear }} Remote Hustle. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-secondary);
  color: var(--color-white);

  padding-top: var(--space-12);
}

.site-footer__top {
  display: grid;

  gap: var(--space-10);

  padding-bottom: var(--space-10);
}

.site-footer__brand {
  max-width: 420px;
}

.site-footer__logo {
  display: inline-block;

  margin-bottom: var(--space-4);

  color: var(--color-white);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);

  letter-spacing: -0.03em;
}

.site-footer__description {
  color: var(--color-gray-300);
}

.site-footer__nav {
  display: flex;
  flex-direction: column;

  gap: var(--space-3);
}

.site-footer__link {
  width: fit-content;

  color: var(--color-gray-300);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);

  transition: color var(--transition-fast);
}

.site-footer__link:hover,
.site-footer__link.router-link-active {
  color: var(--color-white);
}

.site-footer__cta {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: var(--space-4);
}

.site-footer__cta-label {
  color: var(--color-gray-300);

  font-size: var(--font-size-sm);
}

.site-footer__bottom {
  padding-block: var(--space-5);

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.site-footer__bottom p {
  color: var(--color-gray-400);

  font-size: var(--font-size-sm);
}

@media (min-width: 768px) {
  .site-footer__top {
    grid-template-columns:
      minmax(0, 1.5fr)
      minmax(180px, 0.8fr)
      minmax(220px, 0.8fr);

    align-items: start;
  }
}
</style>