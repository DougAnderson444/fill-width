import FitTest from './FitTest.svelte';

// 	Inspired by: https://stackoverflow.com/questions/30940499/text-size-auto-resizing-on-div-width

export function fillWidth(nodeEl, { width = 227 } = {}) {
	if (!nodeEl.innerHTML) return;

	let fitTest;
	let fontSize = 10;

	// set white-space: nowrap on nodeEl
	// to prevent line breaks from affecting the width
	nodeEl.style.whiteSpace = 'nowrap';

	// get the closest  fontSize inherited from the parent
	const copyEl = document.createElement(nodeEl.nodeName.toLowerCase());
	// set copyEl.style same aas nodeEl.style
	copyEl.style.fontFamily = window.getComputedStyle(nodeEl).fontFamily;
	copyEl.style.fontSize = fontSize;
	copyEl.style.opacity = 0;
	copyEl.style.position = 'absolute';
	copyEl.style.display = 'hidden';
	copyEl.style.whiteSpace = 'nowrap';

	document.body.appendChild(copyEl);

	fitTest = new FitTest({
		target: copyEl,
		props: {
			text: nodeEl.innerHTML,
			fontSize
		}
	});

	nodeEl.style.fontSize = (width / fitTest.getWidth()) * fontSize + 'px';

	// Alternate method using events
	// fitTest.$on('width', (e) => {
	// 	nodeEl.style.fontSize = (width / e.detail) * fontSize + 'px';
	// });
	// fitTest.$set({ ready: true });

	return {
		update(params) {
			width = params?.width || width;
			fontSize = params?.fontSize || fontSize;

			fitTest.$set({
				text: nodeEl.innerHTML,
				fontSize
			});

			nodeEl.style.fontSize = (width / fitTest.getWidth()) * fontSize + 'px';
		},

		destroy() {
			// the node has been removed from the DOM
		}
	};
}
