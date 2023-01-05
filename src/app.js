class App {
	constructor() {
		this.animate()
	}
	
	animate() {
		requestAnimationFrame(() => this.animate())
		this.render()
	}
	
	render() {
		
	}
}