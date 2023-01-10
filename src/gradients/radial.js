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
		this.size = args.size || 100
		this.from = randomColor()
		this.from_0 = hex2rgba(this.from, 0)
		this.middle = randomColor()
		this.to = randomColor()
		this.to_0 = hex2rgba(this.to, 0)
	}

	gradient(_ctx) {
		let time = new Date().getTime() * .00075
		let _size = Math.abs(Math.sin(time) * this.size)
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
		grd.addColorStop(Math.abs(Math.sin(time) * .25), this.from)
		grd.addColorStop(Math.abs(Math.sin(time) * .25) + .25, this.middle)
		grd.addColorStop(Math.abs(Math.sin(time) * .25) + .5, this.to)
		grd.addColorStop(1, this.to_0)
		return grd
	}

}