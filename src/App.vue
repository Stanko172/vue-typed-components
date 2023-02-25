<script setup lang="ts">
import { useGenericComponent } from './Composables/useGenericComponent';

const StringComponent = useGenericComponent<string>();

interface Cat {
  id: number;
  name: string;
}

const ObjectComponent = useGenericComponent<Cat>();
</script>

<template>
  <StringComponent value="Hello World!" />

  <ObjectComponent :value="{ id: 1, name: 'Fluffmaster' }" />
</template>
