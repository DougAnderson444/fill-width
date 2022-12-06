<script>
	// @ts-nocheck

	/**
	 * A component to track the size the text is
	 */
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let text;
	export let width;
	export let height;
	export let ready = false;
	export let fontSize;

	export const getWidth = () => width;

	$: if (ready && width) {
		dispatch('width', width);
	}
	$: if (ready && height) dispatch('height', height);
</script>

<p style="font-size: {fontSize}px">
	<span bind:offsetWidth={width} bind:offsetHeight={height} style:opacity={0.4}>{text}</span>
</p>
