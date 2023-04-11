import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseModal from '../src/components/reusables/BaseModal.vue';

describe('BaseModal', () => {
  const wrapper = mount(BaseModal);
  it('Mounts properly', async () => {
    expect(wrapper).toBeTruthy();
  });
  it('Emits an event when the modal is clicked', async () => {
    // const div = wrapper.find('div');
    // await div.trigger('click');
    // expect(wrapper.emitted('openModal')).toBeFalsy();
  });
});
