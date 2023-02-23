import { defineComponent, h } from 'vue';
import BaseGenericComponent from '../components/BaseGenericComponent.vue';

interface GenericProps<TValue> extends Omit<ExtractComponentProps<typeof BaseGenericComponent>, 'value'> {
  value: TValue
}

export function useGenericComponent<TValue = unknown>() {
  const wrapper = defineComponent((props: GenericProps<TValue>) => {
    return () => h(BaseGenericComponent, props);
  });

  return wrapper;
}
