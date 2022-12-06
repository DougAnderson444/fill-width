<script>
	import { fillWidth } from '@douganderson444/fill-width';

	let adjustableWidthEl;
	let offsetWidth;
	let maxWidth = 400;
	let maxSize = 20;
	$: width = maxWidth + 'px';
	let fontSize = 10;
	$: if (fontSize) maxWidth = maxWidth;
</script>

<section style="width:100%;">
	<label style="width:100%;">
		<span style="width:100%;">Width = {maxWidth}</span>
		<input type="range" bind:value={maxWidth} min="100" max="800" style="width:100%;" />
	</label>
</section>

<section style="width:100%;">
	<label style="width:100%;">
		<span style="width:100%;">Max Font Size = {fontSize}</span>
		<input type="range" bind:value={fontSize} min="1" max="100" style="width:100%;" />
	</label>
</section>

<div style:width bind:offsetWidth>
	<p
		bind:this={adjustableWidthEl}
		style:fontSize={fontSize + 'px'}
		use:fillWidth={{ width: maxWidth }}
		contenteditable
		on:change={() => {
			maxWidth = offsetWidth;
		}}
		on:keypress={() => {
			maxWidth = offsetWidth;
		}}
	>
		Contenteditable para in a div goes here
	</p>
</div>

<div style:width>
	<p style:fontSize={fontSize + 'px'}>
		<span use:fillWidth={{ width: maxWidth }} contenteditable>Span in Para</span>
	</p>
</div>

<div style:width>
	<div style:fontSize={fontSize + 'px'} use:fillWidth={{ width: maxWidth }}>
		Even works with different fonts
	</div>
</div>

<style>
	div {
		border: 1px solid yellowgreen;
		margin-bottom: 9px;
	}

	p,
	span {
		margin: 0px;
		font-family: 'Luckiest Guy', cursive;
	}

	@font-face {
		font-family: 'Luckiest Guy';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/luckiestguy/v17/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
</style>
