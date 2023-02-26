<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{ value: unknown }>();

const oldValue = ref<unknown>();

watch(() => props.value, (_, oldVal) => {
  oldValue.value = oldVal;
});
</script>

<template>
  <pre>
    <slot :current-value="value" :old-value="oldValue">
      {{ value }}
    </slot>
  </pre>
</template>
