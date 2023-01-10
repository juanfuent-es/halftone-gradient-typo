import {
    PX_RATIO
} from "../constants"

Math.dist = (dx, dy) => {
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}
/**
 * @class
 * @name {Mouse}
 * @param {Object}
 */
export default class Mouse {
    constructor(args = {}) {
        this.translate = {
            x: 1,
            y: 1
        }
        this.pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        this.max_distance = args.max_distance || 500
        this.min_distance = args.min_distance || 0.3
        this.precision = args.precision || 2
        this.friction = args.friction || .1
        this.rotation = 0
        this.scale = 0
        // mouseevent
        document.addEventListener('mousemove', (e) => {
            this.pos.x = e.clientX * PX_RATIO
            this.pos.y = e.clientY * PX_RATIO
        }, false)
    }

    speed_morph() {
        const dist = Math.dist(this.dx, this.dy)
        const max = dist / this.max_distance
        return Number(Math.min(max, this.min_distance).toFixed(2))
    }

    update() {
        const speed_morph = this.speed_morph(this.dx, this.dy)
        this.scale += (speed_morph - this.scale) * this.friction

        this.translate.x += this.dx * this.friction
        this.translate.y += this.dy * this.friction

        // this.radians = this.rotation * (Math.PI / 180) + (Math.PI/2)
        this.radians = Math.atan2(this.dx, this.dy)
        this.rotation = this.radians * 180 / Math.PI //html rotation transform
        this.radians += Math.PI / 2 // Fix rotation on canvas
    }

    get dx() {
        return this.pos.x - this.translate.x
    }

    get dy() {
        return this.pos.y - this.translate.y
    }
}