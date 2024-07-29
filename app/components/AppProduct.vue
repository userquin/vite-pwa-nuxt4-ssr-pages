<script setup lang="ts">
const props = defineProps<{ product?: string }>()
const { data, error, status } = useFetch(`/api/products/${props.product || '0'}`, {
  key: `product-${props.product || '0'}`,
  method: 'GET',
  lazy: true,
})
</script>

<template>
  <div>
    <template v-if="status === 'pending'">
      <div>Loading...</div>
    </template>
    <template v-else-if="error">
      <div>Error: {{ error?.message }}</div>
    </template>
    <template v-else-if="data">
      <div>
        <h1>{{ data.name }}</h1>
        <p>Price: {{ data.price }}</p>
      </div>
    </template>
    <footer>
      <NuxtLink to="/products">Back</NuxtLink>
    </footer>
  </div>
</template>
