function handleMouseDown(e: MouseEvent, track: HTMLDivElement) {
	track.dataset.mouseDownAt = String(e.clientX);
}

function handleMouseMove(e: MouseEvent, track: HTMLDivElement) {
	if (track.dataset.mouseDownAt === '0') return;
	const mouseDownAt = track.dataset.mouseDownAt
			? parseFloat(track.dataset.mouseDownAt)
			: 1,
		mouseDelta = mouseDownAt - e.clientX,
		maxDelta = window.innerWidth,
		percentage = (mouseDelta / maxDelta) * -100,
		prevPercentage = track.dataset.prevPercentage ?? '0',
		nextPercentage = parseFloat(prevPercentage) + percentage,
		maxPercentage = Math.max(nextPercentage, -100),
		finalPercentage = Math.min(maxPercentage, 0);

	track.dataset.percentage = finalPercentage.toString();

	track.animate(
		{
			transform: `translate(${finalPercentage}%, -50%)`,
		},
		{ duration: 1200, fill: 'forwards', easing: 'ease-in-out' }
	);
	const images = track.querySelectorAll('.project_img');
	images.forEach((img) => {
		img.animate(
			{
				objectPosition: `${finalPercentage + 100}% 50%`,
			},
			{ duration: 1200, fill: 'forwards', easing: 'ease-in-out' }
		);
	});
}

function handleMouseUp(e: MouseEvent, track: HTMLDivElement) {
	track.dataset.mouseDownAt = '0';
	track.dataset.prevPercentage = track.dataset.percentage;
}

export { handleMouseDown, handleMouseMove, handleMouseUp };
