<script setup lang="ts">
import { useGenericComponent } from './Composables/useGenericComponent';

const StringComponent = useGenericComponent<string>();

interface Cat {
  id: number;
  name: string;
}

const ObjectComponent = useGenericComponent<Cat>();

function handleChange(value: string | Cat): void {
  console.log('Changed value: ', value);
}
</script>

<template>
  <StringComponent value="Hello World!" v-slot="{ currentValue, oldValue }" @changed="handleChange">
    Cool old value: {{ oldValue }} <br>
    Cool current value: {{ currentValue }}
  </StringComponent>

  <ObjectComponent :value="{ id: 1, name: 'Fluffmaster' }" v-slot="{ currentValue, oldValue }" @changed="handleChange">
    Cool old object value: {{ oldValue.name }} <br>
    Cool current object value: {{ currentValue.name }}
  </ObjectComponent>
</template>
