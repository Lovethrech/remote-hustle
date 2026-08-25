<script setup>
const isMenuOpen = ref(false)

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Opportunities', to: '/opportunities' },
    { label: 'Products', to: '/products' },
    { label: 'Register', to: '/register' }
]

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <header class="site-header">
        <div class="container site-header__inner">
            <NuxtLink
                to="/"
                class="site-header__logo"
                @click="closeMenu"
            >
                Remote Hustle
            </NuxtLink>

            <nav
                class="site-header__desktop-nav"
                aria-label="Primary navigation"
            >
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.to"
                    :to="item.to"
                    class="site-header__nav-link"
                >
                    {{ item.label }}
                </NuxtLink>
            </nav>

            <div class="site-header__actions">
                <NuxtLink
                    to="/register"
                    class="site-header__register-button"
                >
                    Register Now
                </NuxtLink>

                <button
                    class="site-header__menu-button"
                    type="button"
                    :aria-expanded="isMenuOpen"
                    aria-controls="mobile-navigation"
                    aria-label="Toggle navigation menu"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </div>

        <nav
            v-if="isMenuOpen"
            id="mobile-navigation"
            class="site-header__mobile-nav"
            aria-label="Mobile navigation"
        >
        <div class="container site-header__mobile-inner">
            <NuxtLink
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                class="site-header__mobile-link"
                @click="closeMenu"
            >
                {{ item.label }}
            </NuxtLink>

            <NuxtLink
                to="/register"
                class="site-header__mobile-register"
                @click="closeMenu"
            >
                Register Now
            </NuxtLink>
        </div>
        </nav>
    </header>
</template>

<style scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 100;

    min-height: var(--header-height);

    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid var(--color-gray-200);
    backdrop-filter: blur(12px);
}

.site-header__inner {
    min-height: var(--header-height);

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: var(--space-4);
}

.site-header__logo {
    color: var(--color-secondary);

    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);

    letter-spacing: -0.03em;
}

.site-header__desktop-nav {
    display: none;
}

.site-header__nav-link {
  position: relative;

  color: var(--color-gray-600);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);

  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

.site-header__nav-link:hover {
  color: var(--color-primary);
}

.site-header__nav-link.router-link-active {
  color: var(--color-primary);
}

.site-header__actions {
  display: flex;
  align-items: center;

  gap: var(--space-3);
}

.site-header__register-button {
  display: none;
}

.site-header__menu-button {
  width: 44px;
  height: 44px;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);

  background: var(--color-white);
}

.site-header__menu-button span {
  width: 20px;
  height: 2px;

  background: var(--color-gray-900);

  border-radius: var(--radius-pill);
}

.site-header__mobile-nav {
  border-top: 1px solid var(--color-gray-200);
  background: var(--color-white);
}

.site-header__mobile-inner {
  display: flex;
  flex-direction: column;

  gap: var(--space-2);

  padding-top: var(--space-4);
  padding-bottom: var(--space-5);
}

.site-header__mobile-link {
  padding: var(--space-3) var(--space-4);

  color: var(--color-gray-700);

  font-weight: var(--font-weight-medium);

  border-radius: var(--radius-md);
}

.site-header__mobile-link:hover,
.site-header__mobile-link.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.site-header__mobile-register {
  margin-top: var(--space-2);

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;

  padding-inline: var(--space-5);

  color: var(--color-white);
  background: var(--color-primary);

  font-weight: var(--font-weight-semibold);

  border-radius: var(--radius-md);

  transition: background var(--transition-fast);
}

.site-header__mobile-register:hover {
  background: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .site-header__desktop-nav {
    display: flex;
    align-items: center;

    gap: var(--space-6);
  }

  .site-header__register-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 44px;

    padding-inline: var(--space-5);

    color: var(--color-white);
    background: var(--color-primary);

    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);

    border-radius: var(--radius-md);

    transition:
      background var(--transition-fast),
      transform var(--transition-fast);
  }

  .site-header__register-button:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  .site-header__menu-button {
    display: none;
  }

  .site-header__mobile-nav {
    display: none;
  }
}
</style>