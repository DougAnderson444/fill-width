import FitTest from './FitTest.svelte';

// 	Inspired by: https://stackoverflow.com/questions/30940499/text-size-auto-resizing-on-div-width

export function fillWidth(nodeEl, { width = 227, fontSize = 20 } = {}) {
	if (!nodeEl.innerHTML) return;
	let fitTest;

	fitTest = new FitTest({
		target: document.body,
		props: {
			text: nodeEl.innerHTML,
			fontSize
		}
	});

	nodeEl.style.fontSize = (width / fitTest.getWidth()) * fontSize + 'px';

	fitTest.$on('width', (e) => {
		nodeEl.style.fontSize = (width / e.detail) * fontSize + 'px';
	});
	fitTest.$set({ ready: true });

	return {
		update(params) {
			width = params?.width || width;
			fontSize = params?.fontSize || fontSize;

			fitTest.$set({
				text: nodeEl.innerHTML,
				fontSize,
				ready: false
			});

			nodeEl.style.fontSize = (width / fitTest.getWidth()) * fontSize + 'px';
		},

		destroy() {
			// the node has been removed from the DOM
		}
	};
}
