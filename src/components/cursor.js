import Mouse from "./mouse"

export default class Cursor extends Mouse {
    constructor(args={}) {
        super()
        this.size = args.size || 32
        this.borderWidth = args.borderWidth || 1
        this.borderColor = args.borderColor || "#000"
        this.bg = args.bg || "#FFF"
        //
        this.container = document.createElement("div")
        this.circle = document.createElement("div")
        //
        this.container.appendChild(this.circle)
        document.body.appendChild(this.container)
        //
        this.containerStyle()
        this.shapeStyle()
    }

    containerStyle() {
        this.container.style.pointerEvents = 'none'
        this.container.style.position = 'fixed'
        this.container.style.zIndex = '99'
        this.container.style.left = 0
        this.container.style.top = 0
    }

    shapeStyle() {
        this.circle.style.width = `${this.size}px`
        this.circle.style.height = `${this.size}px`
        // Border
        this.circle.style.borderWidth = `${this.borderWidth}px`
        this.circle.style.borderColor = `${this.borderColor}`
        this.circle.style.borderStyle = 'solid'
        // Position
        this.circle.style.marginTop = '-50%'
        this.circle.style.marginLeft = '-50%'
        this.circle.style.borderRadius = '50%'

        this.circle.style.backgroundColor = `${this.bg}`
    }

    render() {
        this.update()
        this.container.style.transform = 'translate3d(' + this.translate.x.toFixed(this.precision) + 'px ,' + this.translate.y.toFixed(this.precision) + 'px, 0)'
        this.circle.style.transform = 'rotate(' + this.rotation.toFixed(this.precision) + 'deg) scale(' + (1 + this.scale) + ', ' + (1 - this.scale) + ')'
    }

}