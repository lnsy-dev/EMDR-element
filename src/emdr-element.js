/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

class BreathingTimer extends HTMLElement {
  connectedCallback(){
    const breathing_circle_1 = document.createElement('div');
    breathing_circle_1.classList.add('breath-circle-1');
    this.appendChild(breathing_circle_1);
    const breathing_circle_2 = document.createElement('div');
    breathing_circle_2.classList.add('breath-circle-2');
    this.appendChild(breathing_circle_2);

    const label = document.createElement('div');
    label.innerText = `Let's breathe for 1 minute before we continue`;
    label.classList.add('breath-label');
    this.appendChild(label);

    setTimeout((e) => {
      this.classList.add('fade-out-div');
      setTimeout((t) => {
        this.remove();
      }, 5000);
    }, 60000);

  }

}

customElements.define('emdr-element', BreathingTimer)