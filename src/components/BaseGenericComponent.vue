<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  value: {
    type: null as unknown as PropType<unknown>,
    required: true,
  }
});
</script>

<template>
  <pre>{{ value }}</pre>
</template>
