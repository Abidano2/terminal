class ProgressBar {
	constructor(element, initialValue = 0) {
		this.valueElem = element.querySelector('.progress-bar-value');
		this.fillElem = element.querySelector('.progress-bar-fill');

		this.setValue(initialValue);
	}

	setValue(newValue) {
		if (newValue < 0) {
			newValue = 0;
		}

		if (newValue > 100) {
			newValue = 100;
		}

		this.value = newValue;
		this.update();
	}

	update() {
		const percentage = this.value + '%';

		this.fillElem.style.width = percentage;
		this.valueElem.textContent = percentage;
	}
}

new ProgressBar(document.querySelector('.progress-bar'), 25);


class ProgressBar1 {
	constructor(element, initialValue = 0) {
		this.valueElem = element.querySelector('.progress-bar-value-ch1');
		this.fillElem = element.querySelector('.progress-bar-fill-ch1');

		this.setValue(initialValue);
	}

	setValue(newValue) {
		if (newValue < 0) {
			newValue = 0;
		}

		if (newValue > 100) {
			newValue = 100;
		}

		this.value = newValue;
		this.update();
	}

	update() {
		const percentage = this.value + '%';

		this.fillElem.style.width = percentage;
		this.valueElem.textContent = percentage;
	}
}

new ProgressBar1(document.querySelector('.progress-bar-ch1'), 37);
