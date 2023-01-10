import { Canvas } from "./components/canvas"
import GradientCursor from "./gradients/cursor"

const PALETTE = ["#0F5CBF", "#0CB1F2", "#EBF227", "#F2600C", "#F22E2E"];

function hex2rgba(_hex, alpha) {
	const int = parseInt(_hex.replace("#", ""), 16);
	return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${
		int & 255
	}, ${alpha})`;
}

function randomColor() {
	return PALETTE[~~(Math.random() * PALETTE.length)];
}
class App extends Canvas {
	constructor() {
		super()
		this.container = document.querySelector("main")
		this.container.appendChild(this.canvas)
		this.bg = randomColor()
		this.bg_0 = hex2rgba(this.bg, .15)

		this.cursor = new GradientCursor()
		this.background(this.bg)
		this.animate()
	}
	
	animate() {
		requestAnimationFrame(() => this.animate())
		this.render()
	}
	
	render() {
        this.background(this.bg_0)
		this.cursor.render(this.context)
	}
}

const _app = new App()