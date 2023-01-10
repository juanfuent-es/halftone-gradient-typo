import { Canvas } from "./components/canvas"
import GradientCursor from "./gradients/cursor"
class App extends Canvas {
	constructor() {
		super()
		this.container = document.querySelector("main")
		this.container.appendChild(this.canvas)
		this.bg = "#0F5CBF"
		this.bg_0 = "rgba(15, 92, 191, .25)"

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