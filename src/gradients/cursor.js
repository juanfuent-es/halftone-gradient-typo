import Mouse from "../components/mouse"
import RadialGradient from "./radial"

const PALETTE = ["#0CB1F2", "#EBF227", "#F2600C", "#F22E2E"];

function hex2rgba(_hex, alpha) {
	const int = parseInt(_hex.replace("#", ""), 16);
	return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${
		int & 255
	}, ${alpha})`;
}

function randomColor() {
	return PALETTE[~~(Math.random() * PALETTE.length)];
}

export default class GradientCursor extends Mouse {
    constructor(args = {}) {
        super()
        this.size = 50
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
        _ctx.rotate(-this.rotation)
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