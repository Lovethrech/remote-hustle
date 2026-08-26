<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  checkoutUrl: {
    type: String,
    required: true
  }
})

const formatPrice = price => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <article class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="image"
        :alt="name"
        class="product-card__image"
        loading="lazy"
      >
    </div>

    <div class="product-card__content">
      <h2 class="product-card__title">
        {{ name }}
      </h2>

      <p class="product-card__description">
        {{ description }}
      </p>

      <div class="product-card__bottom">
        <strong class="product-card__price">
          {{ formatPrice(price) }}
        </strong>

        <a
          :href="checkoutUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="product-card__buy"
        >
          Buy Now
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);

  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.product-card:hover {
  transform: translateY(-4px);

  border-color: var(--color-gray-300);

  box-shadow: var(--shadow-md);
}

.product-card__image-wrapper {
  aspect-ratio: 4 / 3;

  overflow: hidden;

  background: var(--color-gray-100);
}

.product-card__image {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform var(--transition-base);
}

.product-card:hover .product-card__image {
  transform: scale(1.03);
}

.product-card__content {
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: var(--space-6);
}

.product-card__title {
  margin-bottom: var(--space-3);

  font-size: var(--font-size-xl);
}

.product-card__description {
  margin-bottom: var(--space-6);
}

.product-card__bottom {
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: var(--space-4);
}

.product-card__price {
  color: var(--color-gray-900);

  font-size: var(--font-size-lg);
}

.product-card__buy {
  min-height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding-inline: var(--space-5);

  color: var(--color-white);
  background: var(--color-primary);

  border-radius: var(--radius-md);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);

  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}

.product-card__buy:hover {
  background: var(--color-primary-dark);

  transform: translateY(-1px);
}
</style>