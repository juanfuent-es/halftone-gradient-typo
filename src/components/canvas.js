import { PX_RATIO } from "../constants"
class Canvas {
    constructor() {
        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
        //
        this.onResize()
    }

    onResize(_width = window.innerWidth, _height = window.innerHeight) {
        this.width = _width * PX_RATIO
        this.height = _height * PX_RATIO
        this.canvas.width = this.width
        this.canvas.height = this.height
    }

    clear() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    background(_fill = "#000") {
        this.context.fillStyle = _fill
        this.context.fillRect(0, 0, this.width, this.height)
    }
    
    fill(_fill = "#000") {
        this.context.fillStyle = _fill
        this.context.fill()
    }

    stroke(_color = "#000") {
        this.context.strokeStyle = _color
        this.context.stroke()
    }
}

export {
    Canvas
}