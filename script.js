// Simple mobile menu toggle: show nav when bars clicked, hide when times clicked
document.addEventListener('DOMContentLoaded', function () {
	const bars = document.querySelector('.fa-bars');
	const times = document.querySelector('.fa-times');
	const navLinks = document.querySelector('.nav-links');

	if (!bars || !times || !navLinks) return;

	function updateNavDisplay() {
		if (window.innerWidth <= 700) {
			navLinks.style.display = 'none';
			bars.style.display = 'inline-block';
			times.style.display = 'none';
		} else {
			navLinks.style.display = '';
			bars.style.display = 'none';
			times.style.display = 'none';
		}
	}

	bars.addEventListener('click', function () {
		navLinks.style.display = 'block';
		bars.style.display = 'none';
		times.style.display = 'inline-block';
	});

	times.addEventListener('click', function () {
		navLinks.style.display = 'none';
		bars.style.display = 'inline-block';
		times.style.display = 'none';
	});

	window.addEventListener('resize', updateNavDisplay);
	updateNavDisplay();
});
