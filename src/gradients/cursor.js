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
        this.radial = new RadialGradient({
            x: this.pos.x,
            y: this.pos.y,
            size: 50
        })
    }

    render(_ctx) {
        //Update mouse pos with verlet integration
        this.update()
        this.radial.updatePos(this.translate)
        // 
        _ctx.save()
        _ctx.globalCompositeOperation = "overlay" //lighter
        // this.radial.render(_ctx);
        _ctx.fillStyle = this.radial.gradient(_ctx)
        _ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
        _ctx.closePath()
        //
        _ctx.restore()
        // this.container.style.transform = 'translate3d(' + this.translate.x.toFixed(this.precision) + 'px ,' + this.translate.y.toFixed(this.precision) + 'px, 0)'
        // this.circle.style.transform = 'rotate(' + this.rotation.toFixed(this.precision) + 'deg) scale(' + (1 + this.scale) + ', ' + (1 - this.scale) + ')'
    }

}