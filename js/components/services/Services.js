import { IsValid } from '../is-valid/IsValid.js';

class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
    }

    init() {
        if (
            !IsValid.nonEmptyString(this.selector) ||
            !IsValid.nonEmptyArray(this.data) ||
            !this.canFindTargetElement()
        ) {
            return false;
        }

        return this.render();
    }

    canFindTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidService(service) {
        return (
            IsValid.trueObject(service) &&
            IsValid.objectKeysCount(service, 3) &&
            IsValid.nonEmptyString(service.icon) &&
            IsValid.nonEmptyString(service.title) &&
            IsValid.nonEmptyString(service.description)
        );
    }

    render() {
        let HTML = '';

        for (const service of this.data) {
            if (this.isValidService(service)) {
                HTML += `
                        <div class="service-container col-md-6 col-lg-4">
                          <span class="lnr lnr-${service.icon}"></span>
                          <div class="service-title">${service.title}</div>
                          <p class="service-description">${service.description}</p>
                        </div>
                        `;
            }
        }

        if (HTML === '') {
            return false;
        }

        this.DOM.innerHTML = HTML;
        return true;
    }
}

export { Services };
