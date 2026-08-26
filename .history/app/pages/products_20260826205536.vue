<script setup>
import { products } from '~/data/products'

useSeoMeta({
    title: 'Products',
    description:
        'Browse Remote Hustle products, resources and career development materials.'
})
</script>

<template>
    <main>
        <PageHero
            eyebrow="Products"
            title="Resources designed to support your growth."
            description="Browse Remote Hustle products and choose the resources that can help you build skills and move forward professionally."
        />

        <section class="section products">
        <div class="container">
            <div
                v-if="products.length"
                class="products__grid"
            >
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :image="product.image"
                :name="product.name"
                :description="product.description"
                :price="product.price"
                :checkout-url="product.checkoutUrl"
            />
            </div>

            <div
            v-else
            class="products__empty"
            >
            <h2>No products available yet.</h2>

            <p>
                Please check back soon for new Remote Hustle products.
            </p>
            </div>
        </div>
        </section>
    </main>
</template>

<style scoped>
.products {
  background: var(--color-white);
}

.products__grid {
  display: grid;
  grid-template-columns: 1fr;

  gap: var(--space-5);
}

.products__empty {
  max-width: 560px;

  margin-inline: auto;

  padding: var(--space-10);

  text-align: center;

  background: var(--color-gray-50);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
}

.products__empty h2 {
  margin-bottom: var(--space-3);

  font-size: var(--font-size-2xl);
}

@media (min-width: 640px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(3, 1fr);

    gap: var(--space-6);
  }
}
</style>