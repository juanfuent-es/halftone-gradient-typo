import Mouse from "../components/mouse"
import RadialGradient from "./radial"

export default class GradientCursor extends Mouse {
    constructor(args = {}) {
        super()
        this.size = 150
        this.diameter = this.size * 2
        this.radial = new RadialGradient({
            x: this.pos.x,
            y: this.pos.y,
            size: this.size
        })
    }

    render(_ctx) {
        //Update mouse pos with verlet integration
        this.update()
        // 
        _ctx.save()
        _ctx.translate(this.translate.x - this.size, this.translate.y - this.size)
        _ctx.save()
        _ctx.translate(this.size, this.size)
        _ctx.rotate(-this.radians)
        _ctx.scale(1 + this.scale, 1- this.scale)
        _ctx.translate(-this.size, -this.size)
        _ctx.globalCompositeOperation = "overlay" //lighter
        _ctx.fillStyle = this.radial.gradient(_ctx)
        _ctx.fillRect(0, 0, this.diameter, this.diameter)
        _ctx.restore()
        _ctx.restore()
        // this.container.style.transform = 'translate3d(' + this.translate.x.toFixed(this.precision) + 'px ,' + this.translate.y.toFixed(this.precision) + 'px, 0)'
        // this.circle.style.transform = 'rotate(' + this.rotation.toFixed(this.precision) + 'deg) scale(' + (1 + this.scale) + ', ' + (1 - this.scale) + ')'
    }

}