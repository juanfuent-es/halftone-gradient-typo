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
        this.max_distance = args.max_distance || 1000
        this.min_morph = args.min_morph || 0.1
        this.precision = args.precision || 1
        this.friction = args.friction || .075
        this.rotation = 0
        this.radians = 0
        this.scale = 0
        // mouseevent
        document.addEventListener('mousemove', (e) => {
            this.pos.x = e.clientX * PX_RATIO
            this.pos.y = e.clientY * PX_RATIO
        }, false)
    }

    get morph() {
        const dist = Math.dist(this.dx, this.dy)
        const vel = dist / this.max_distance
        return Number(Math.min(vel, this.min_morph).toFixed(this.precision))
    }

    update() {
        this.scale += (this.morph - this.scale) * this.friction

        this.translate.x += this.dx * this.friction
        this.translate.y += this.dy * this.friction

        this.rotation = Math.atan2(this.dy, this.dx) * 180 / Math.PI // degrees, css rotation
        this.radians = Math.atan2(this.dx, this.dy) + Math.PI / 2 // radians, canvas rotation
    }

    get dx() {
        return this.pos.x - this.translate.x
    }

    get dy() {
        return this.pos.y - this.translate.y
    }
}