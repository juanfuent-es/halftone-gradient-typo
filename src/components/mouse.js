import { PX_RATIO } from "../constants"

Math.dist = (dx, dy) => {
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}

export default class Mouse {
    constructor() {
        this.translate = {
            x: 1,
            y: 1
        }
        this.screen = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        this.max_distance = 500
        this.precision = 2
        this.friction = .1
        this.rotation = 0
        this.min = 0.3
        this.animate()
        this.events()
    }

    events() {
        document.addEventListener('mousemove', (e) => {
            this.screen.x = e.clientX * PX_RATIO
            this.screen.y = e.clientY * PX_RATIO
        }, false)
    }

    speed_morph() {
        const dist = Math.dist(this.dx, this.dy)
        const max = dist / this.max_distance
        return Number(Math.min(max, this.min).toFixed(2))
    }

    animate() {
        requestAnimationFrame(() => this.animate())
        this.update()
    }

    update() {
        const speed_morph = this.speed_morph(this.dx, this.dy)
        this.scale += (speed_morph - this.scale) * this.friction

        this.translate.x += this.dx * this.friction
        this.translate.y += this.dy * this.friction

        this.rotation = Math.atan2(this.dy, this.dx) * 180 / Math.PI
    }

    get dx() {
        return this.screen.x - this.translate.x
    }

    get dy() {
        return this.screen.y - this.translate.y
    }
}