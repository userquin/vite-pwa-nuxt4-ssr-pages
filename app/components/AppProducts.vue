<script setup lang="ts">
const { data, error, status, refresh } = useFetch('/api/products', {
  method: 'get',
  lazy: true,
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th colspan="3">
          <div>
            <span>Products</span>
            <button @click="refresh()">Refresh</button>
          </div>
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    <template v-if="status === 'pending'">
      <tr>
        <td colspan="3">Loading...</td>
      </tr>
      </template>
    <template v-else-if="error">
      <tr>
        <td colspan="3">Error: {{ error?.message }}</td>
      </tr>
    </template>
    <template v-else-if="data?.products">
      <tr v-for="product in data.products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <NuxtLink :to="`/products/${product.id}`">Details</NuxtLink>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>
