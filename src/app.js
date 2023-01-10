import Cursor from "./components/cursor"
class App {
	constructor() {
		this.cursor = new Cursor()
		this.animate()
	}
	
	animate() {
		requestAnimationFrame(() => this.animate())
		this.render()
	}
	
	render() {
		this.cursor.render()
	}
}

const _app = new App()
