<script setup lang="ts">
import { defineComponent, PropType } from 'vue';

function useGenericComponent<TValue = unknown>() {
  const GenericComponent = defineComponent({
    props: {
      value: {
        type: null as unknown as PropType<TValue>,
        required: true,
      },
    },

    render: () => h('div', props.value),
  });

  return GenericComponent;
}

interface User {
  id: number;
  name: string;
}

const StringComponent = useGenericComponent<string>();
const UserComponent = useGenericComponent<User>();
</script>

<template>
  <StringComponent value="Hello" />
  <UserComponent :value="{ id: 1, name: 'Awad' }" />
</template>
