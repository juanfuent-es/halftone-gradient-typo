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
		this.x = args.x || 0
		this.y = args.x || 0
		this.from = randomColor()
		this.from_0 = hex2rgba(this.from, 0)
		this.middle = randomColor()
		this.to = randomColor()
		this.to_0 = hex2rgba(this.to, 0)
	}

	updatePos(_pos) {
		this.x = _pos.x
		this.y = _pos.y
	}
	
	gradient(_ctx) {
		let time = new Date().getTime() * .0001
		const grd = _ctx.createRadialGradient(
			this.x,
			this.y,
			0,
			this.x,
			this.y,
			Math.abs(Math.sin((time + this.x - this.y) * .0035) * this.size) + 50
		)
		grd.addColorStop(0, this.from_0)
		grd.addColorStop(.25, this.from)
		grd.addColorStop(.5, this.middle)
		grd.addColorStop(.75, this.to)
		grd.addColorStop(1, this.to_0)
		return grd
	}

}