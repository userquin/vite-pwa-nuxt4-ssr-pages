<script setup lang="ts">
const id = useRoute().params.id as string
// todo: handle missing or invalid id
</script>

<template>
  <AppProduct :product="id" />
</template>
