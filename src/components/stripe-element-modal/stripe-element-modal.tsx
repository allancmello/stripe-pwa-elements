import { Component, Host, h, Prop, Method, Element } from '@stencil/core';
import { checkPlatform } from '../../utils/utils';

@Component({
  tag: 'stripe-element-modal',
  styleUrl: 'stripe-element-modal.scss',
  shadow: true,
})
export class StripeElementModal {
  @Element() el: HTMLElement;
  @Prop() showCloseButton: boolean = true;

  /**
   * Modal state.
   * If true, the modal will open
   */
  @Prop() open: boolean = false;

  /**
   * Toggle modal state
   */
  @Method()
  public async toggleModal() {
    this.open = !this.open;
  }

  /**
   * Open the modal
   */
  @Method()
  public async openModal() {
    this.open = true;
  }

  /**
   * Close the modal
   */
  @Method()
  public async closeModal() {
    this.open = false;
  }

  componentDidLoad() {
    this.el.classList.add(checkPlatform());
  }

  render() {
    const { open, showCloseButton } = this;
    return (
      <Host>
        <div class={`modal-row${open ? ' open' : ''}`} onClick={() => this.closeModal()}>
          <div class="modal-child" onClick={e => e.stopPropagation()}>
            <slot></slot>
            {showCloseButton ? (
              <button class="modal-close-button" onClick={() => this.closeModal()}>
                Close
              </button>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
