import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default class SlideParagraph {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="slide-p"]');
		this.init();
	}

	init() {
		this.el.forEach((el) => {
			const tl = gsap.timeline({
				paused: true,
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
					onEnter: () => {
						tl.play();
					},
				},
			});
			tl.from(el.querySelectorAll('.char'), {
				yPercent: 150,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.051,
			});
		});
	}
}
