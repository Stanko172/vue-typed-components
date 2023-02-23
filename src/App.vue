<script setup lang="ts">
import { useGenericComponent } from './Composables/useGenericComponent';

const StringComponent = useGenericComponent<string>();
interface User {
  id: number;
  name: string;
}
const ObjectComponent = useGenericComponent<User>();
</script>

<template>
  <StringComponent value="hello" />

  <ObjectComponent :value="{ id: 1, name: 'Awad' }" />
</template>
