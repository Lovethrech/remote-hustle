<script setup>
defineProps({
    to: {
        type: String,
        default: ''
    },

    href: {
        type: String,
        default: ''
    },

    variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary'].includes(value)
    },

    size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value)
    },

    block: {
        type: Boolean,
        default: false
    },

    type: {
        type: String,
        default: 'button',
        validator: value =>
        ['button', 'submit', 'reset'].includes(value)
    }
})
</script>

<template>
    <NuxtLink
        v-if="to"
        :to="to"
        class="base-button"
        :class="[
        `base-button--${variant}`,
        `base-button--${size}`,
        { 'base-button--block': block }
        ]"
    >
        <slot />
    </NuxtLink>

    <a
        v-else-if="href"
        :href="href"
        class="base-button"
        :class="[
        `base-button--${variant}`,
        `base-button--${size}`,
        { 'base-button--block': block }
        ]"
    >
        <slot />
    </a>

    <button
        v-else
        :type="type"
        class="base-button"
        :class="[
        `base-button--${variant}`,
        `base-button--${size}`,
        { 'base-button--block': block }
        ]"
    >
        <slot />
    </button>
</template>

<style scoped>
.base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
    cursor: pointer;
    transition:
        background var(--transition-fast),
        color var(--transition-fast),
        border-color var(--transition-fast),
        transform var(--transition-fast);
}

.base-button:hover {
    transform: translateY(-2px);
}

.base-button--primary {
    color: var(--color-white);
    background: var(--color-primary);
}

.base-button--primary:hover {
    background: var(--color-primary-dark);
}

.base-button--secondary {
    color: var(--color-gray-900);
    background: var(--color-white);
    border-color: var(--color-gray-300);
}

.base-button--secondary:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
}

.base-button--sm {
    min-height: 40px;
    padding-inline: var(--space-4);

    font-size: var(--font-size-sm);
}

.base-button--md {
  min-height: 46px;
  padding-inline: var(--space-5);

  font-size: var(--font-size-sm);
}

.base-button--lg {
  min-height: 52px;
  padding-inline: var(--space-6);

  font-size: var(--font-size-base);
}

.base-button--block {
  width: 100%;
}
</style>