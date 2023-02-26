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
  <StringComponent value="Hello World!" v-slot="{ currentValue, oldValue }">
    Cool old value: {{ oldValue }} <br>
    Cool current value: {{ currentValue }}
  </StringComponent>

  <ObjectComponent :value="{ id: 1, name: 'Fluffmaster' }" v-slot="{ currentValue, oldValue }">
    Cool old object value: {{ oldValue.name }} <br>
    Cool current object value: {{ currentValue.name }}
  </ObjectComponent>
</template>
