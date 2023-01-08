import rss from '@astrojs/rss'

export const get = () =>
	rss({
		title: 'Astro Learner | Blog',
		description: 'My journey learning Astro',
		site: 'https://sprightly-speculoos-36f7ae.netlify.app/',
		items: import.meta.glob('./**/*.md'),
		customData: `<language>en-us</language>`,
	})
