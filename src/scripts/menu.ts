const $hamburger = document.querySelector('.hamburger')

if ($hamburger) {
	$hamburger.addEventListener('click', () => {
		document.querySelector('.nav-links')?.classList.toggle('expanded')
	})
}
