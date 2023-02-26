import { VNode, defineComponent, h } from 'vue';
import BaseGenericComponent from '../components/BaseGenericComponent.vue';
import { ExtractComponentProps } from '../types';

interface GenericProps<TValue> extends Omit<ExtractComponentProps<typeof BaseGenericComponent>, 'value'> {
  value: TValue
}

interface GenericSlotProps<TValue> {
  currentValue: TValue,
  oldValue: TValue,
}

export function useGenericComponent<TValue = unknown>() {
  const wrapper = defineComponent((props: GenericProps<TValue>, { slots }) => {
    return () => h(BaseGenericComponent, props, slots);
  });

  return wrapper as typeof wrapper & {
    new (): {
      $slots: {
        default: (arg: GenericSlotProps<TValue>) => VNode[];
      }
    }
  };
}
