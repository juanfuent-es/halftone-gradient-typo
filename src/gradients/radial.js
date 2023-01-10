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

export default class RadialGradient {
	constructor(args) {
		if (args === undefined) args = {}
		this.size0 = args.size || 200
		this.size = this.size0
		this.from = randomColor()
		this.from_0 = hex2rgba(randomColor(), 0)
		this.middle = randomColor()
		this.to = randomColor()
		this.to_0 = hex2rgba(randomColor(), 0)
		this.morph = 0
	}

	setMorph(_scale) {
		this.morph = (_scale * this.size0)
	}

	gradient(_ctx) {
		let time = new Date().getTime() * .001
		const grd = _ctx.createRadialGradient(
			this.size,
			this.size,
			0,
			this.size,
			this.size,
			this.size
		)
		// Math.abs(Math.sin((time + this.x - this.y) * .0035) * this.size) + 50
		grd.addColorStop(0, this.from_0)
		grd.addColorStop(.1, this.from) //(Math.cos(time + this.morph) * .15) + .25
		// grd.addColorStop(Math.abs(Math.cos(time) * .25) + .25, this.middle)
		grd.addColorStop((Math.sin(time + this.morph) * .3) + .65, this.to)
		grd.addColorStop(1, this.to_0)
		return grd
	}

}