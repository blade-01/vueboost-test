import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseButton from '../src/components/reusables/BaseButton.vue';

describe('Base Button', () => {
  const wrapper = mount(BaseButton, {
    props: {
      label: 'Click Me',
      iconLeft: true,
      iconRight: false
    }
  });
  it('Mounts properly', async () => {
    expect(wrapper).toBeTruthy();
  });
  it('Emits an event when the button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
  it('Renders the button label', async () => {
    const button = wrapper.find('button');
    expect(button.text()).toEqual('Click Me');
  });
  it('Renders left icon', async () => {
    const { iconLeft } = wrapper.vm;
    expect(iconLeft).toBeTruthy();
  });
  it('Does not render right icon', async () => {
    const { iconRight } = wrapper.vm;
    expect(iconRight).toBeFalsy();
  });
});
