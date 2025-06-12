<template>
  <canvas id="myCanvas" width="500" height="500"></canvas>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const width = canvas.width;
  const height = canvas.height;

  const tileSize = 20;
  const holeSize = 300;
  const holeX = (width - holeSize) / 2;
  const holeY = (height - holeSize) / 2;

  // 1. Draw checkerboard background on main canvas
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      const isEven = ((x / tileSize + y / tileSize) % 2 === 0);
      ctx.fillStyle = isEven ? '#ccc' : '#fff';
      ctx.fillRect(x, y, tileSize, tileSize);
    }
  }

  // 2. Create an offscreen overlay canvas
  const overlayCanvas = document.createElement('canvas');
  overlayCanvas.width = width;
  overlayCanvas.height = height;
  const overlayCtx = overlayCanvas.getContext('2d');

  // Draw dark overlay
  overlayCtx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  overlayCtx.fillRect(0, 0, width, height);

  // Punch transparent hole
  overlayCtx.globalCompositeOperation = 'destination-out';
  overlayCtx.fillStyle = 'rgba(0, 0, 0, 1)';
  overlayCtx.fillRect(holeX, holeY, holeSize, holeSize);

  overlayCtx.globalCompositeOperation = 'source-over';

  // 3. Draw the overlay onto main canvas
  ctx.drawImage(overlayCanvas, 0, 0);

  // 4. Draw border
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 1;
  ctx.strokeRect(holeX, holeY, holeSize, holeSize);
})
</script>
