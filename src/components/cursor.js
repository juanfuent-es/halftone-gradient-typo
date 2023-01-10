import Mouse from "./mouse"

export default class Cursor extends Mouse {
    constructor() {
        super()
        this.container = document.querySelector("#cursor")
        this.shape = document.querySelector("#cursor-shape")
    }

    render() {
		this.update()
        this.container.style.transform = 'translate3d(' + this.translate.x.toFixed(this.precision) + 'px ,' + this.translate.y.toFixed(this.precision) + 'px, 0)'
        this.shape.style.transform = 'rotate(' + this.rotation.toFixed(this.precision) + 'deg) scale(' + (1 + this.scale) + ', ' + (1 - this.scale) + ')'
    }

}