<template>
  <div>
    <p data-testid="visible">
      The following element should not be visible in test:
    </p>
    <div v-show="false" data-testid="invisible">
      I am invisible
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>