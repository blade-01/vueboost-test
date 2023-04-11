import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseInput from '../src/components/reusables/BaseInput.vue';

describe('Base Input', () => {
  const wrapper = mount(BaseInput, {
    props: {
      label: 'Test',
      type: 'text',
      modelValue: ''
    }
  });
  it('Mounts properly', async () => {
    expect(wrapper).toBeTruthy();
  });
  it('Emits an event when the input is changed', async () => {
    const input = wrapper.find('input');
    await input.setValue('Testing');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
  it('Renders the input value', async () => {
    const input = wrapper.find('input');
    await input.setValue('Testing');
    expect(input.element.value).toEqual('Testing');
    expect(input).toMatchSnapshot();
  });
});
