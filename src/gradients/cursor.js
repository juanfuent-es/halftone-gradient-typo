import Mouse from "../components/mouse"
import RadialGradient from "./radial"

export default class GradientCursor extends Mouse {
    constructor(args = {}) {
        super()
        this.size = 350
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
        this.radial.setMorph(this.smooth_morph)
        //
        _ctx.save()
        _ctx.translate(this.translate.x - this.size, this.translate.y - this.size)
        _ctx.save()
        _ctx.translate(this.size, this.size)
        _ctx.rotate(-this.radians)
        _ctx.scale(1 + this.scale, 1 - this.scale)
        _ctx.translate(-this.size, -this.size)
        _ctx.globalCompositeOperation = "overlay" //lighter
        _ctx.fillStyle = this.radial.gradient(_ctx)
        _ctx.fillRect(0, 0, this.diameter, this.diameter)
        _ctx.restore()
        _ctx.restore()
    }

}