import { VNode, defineComponent, h } from 'vue';
import BaseGenericComponent from '../components/BaseGenericComponent.vue';
import { ExtractComponentProps } from '../types';

type NonGenericProps = Omit<ExtractComponentProps<typeof BaseGenericComponent>, 'value' | 'onChanged'>;

interface GenericProps<TValue> extends NonGenericProps {
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
      $emit: {
        (e: 'changed', value: TValue): void;
      },
      $slots: {
        default: (arg: GenericSlotProps<TValue>) => VNode[];
      }
    }
  };
}
