const PALETTE = ["#0F5CBF", "#0CB1F2", "#EBF227", "#F2600C", "#F22E2E"];
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
		this.radio = this.size / 2
		this.x = args.x || 0
		this.y = args.x || 0
		this.from = randomColor()
		this.to = randomColor()
		this.middle = randomColor()
	}

	update(_pos = {
		x: 0,
		y: 0
	}) {
		this.x = _pos.x
		this.y = _pos.y
		//
		this.gradient = _ctx.createRadialGradient(
			this.x,
			this.y,
			0,
			this.x,
			this.y,
			Math.abs(Math.sin((time + this.x - this.y) * .0035) * 500) + 50
		)
		this.gradient.addColorStop(0, this.from)
		this.gradient.addColorStop(.5, this.middle)
		this.gradient.addColorStop(1, this.to)
	}

}