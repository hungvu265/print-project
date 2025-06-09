<script setup>
const stageConfig = {
    width: 512,
    height: 512
}

const rectWidth = 300
const rectHeight = 400
const rectX = (stageConfig.width - rectWidth) / 2
const rectY = (stageConfig.height - rectHeight) / 2

// Checkerboard pattern
const squareSize = 32
const checkerSquares = []
for (let y = 0; y < stageConfig.height; y += squareSize) {
    for (let x = 0; x < stageConfig.width; x += squareSize) {
        const isWhite = (x / squareSize + y / squareSize) % 2 === 0
        checkerSquares.push({
            x,
            y,
            width: squareSize,
            height: squareSize,
            fill: isWhite ? '#ffffff' : '#cccccc'
        })
    }
}

// Scene function to create "hole" in overlay
function drawOverlay(ctx, shape) {
    const {width, height} = shape.getStage().attrs

    ctx.fillStyle = shape.fill()
    ctx.fillRect(0, 0, width, height)

    // Clear center rectangle
    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight)

    ctx.globalCompositeOperation = 'source-over'
}
</script>

<template>
    <v-stage :config="stageConfig">
        <v-layer ref="layer">
            <!-- Checkerboard Background -->
            <v-rect
                v-for="(square, index) in checkerSquares"
                :key="index"
                :config="square"
            />

            <!-- Overlay layer -->
            <v-rect :config="{
                x: 0,
                y: 0,
          width: stageConfig.width,
          height: stageConfig.height,
          fill: 'rgba(128, 128, 128, 0.5)',
          sceneFunc: drawOverlay
            }"
            />

            <!-- Blue border around transparent area -->
            <v-rect
                :config="{
          x: rectX,
          y: rectY,
          width: rectWidth,
          height: rectHeight,
          stroke: 'blue',
          strokeWidth: 1
        }"
            />
        </v-layer>
    </v-stage>
</template>

<style scoped>

</style>
