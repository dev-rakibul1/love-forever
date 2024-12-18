<template>
  <div>
    <canvas id="loveCanvas" ref="loveCanvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'LoveAnimation',
  data() {
    return {
      particles: [],
      colors: ['#FFC0CB', '#FF69B4', '#FFB6C1'],
      icons: [
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='pink' width='24' height='24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>`,
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='pink' width='24' height='24'><circle cx='12' cy='12' r='10'/></svg>`,
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='pink' width='24' height='24'><rect x='5' y='5' width='14' height='14' rx='2'/></svg>`,
      ],
    }
  },
  mounted() {
    this.initCanvas()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs.loveCanvas
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const createParticles = () => {
        const x = Math.random() * canvas.width
        const y = -10
        const size = Math.random() * 5 + 20
        const color = this.colors[Math.floor(Math.random() * this.colors.length)]
        const iconChance = Math.random()
        const icon =
          iconChance > 0.5 ? this.icons[Math.floor(Math.random() * this.icons.length)] : null
        this.particles.push(new this.Particle(x, y, size, color, icon, ctx, canvas))
      }

      const handleParticles = () => {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].draw()
          this.particles[i].update()

          if (this.particles[i].opacity <= 0) {
            this.particles.splice(i, 1)
            i--
          }
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        handleParticles()
        requestAnimationFrame(animate)
      }

      setInterval(createParticles, 150)
      animate()
    },
    handleResize() {
      const canvas = this.$refs.loveCanvas
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    },
    Particle(x, y, size, color, icon, ctx, canvas) {
      this.x = x
      this.y = y
      this.size = size
      this.color = color
      this.icon = icon
      this.speedY = Math.random() * 2 + 1
      this.opacity = 1
      this.turnedToHeart = false

      this.draw = function () {
        ctx.globalAlpha = this.opacity

        if (this.turnedToHeart) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.bezierCurveTo(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.x - this.size,
            this.y + this.size / 3,
            this.x,
            this.y + this.size,
          )
          ctx.bezierCurveTo(
            this.x + this.size,
            this.y + this.size / 3,
            this.x + this.size / 2,
            this.y - this.size / 2,
            this.x,
            this.y,
          )
          ctx.fill()
        } else if (this.icon) {
          const iconImage = new Image()
          const scale = this.size / 24
          iconImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(this.icon)}`
          ctx.drawImage(
            iconImage,
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size * scale,
            this.size * scale,
          )
        } else {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      }

      this.update = function () {
        if (!this.turnedToHeart) {
          this.y += this.speedY

          if (this.y + this.size > canvas.height) {
            this.turnedToHeart = Math.random() > 0.5
            this.size *= 1.5
          }
        } else {
          this.opacity -= 0.02
        }
      }
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  background-color: #ffe6f0;
}
canvas {
  display: block;
}
</style>
