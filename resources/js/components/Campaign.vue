<template>
    <v-stage :config="{ width: 600, height: 600 }">
        <v-layer>
            <!-- Khung hình vuông -->
            <v-rect
                :config="{
          x: square.x,
          y: square.y,
          width: square.size,
          height: square.size,
          stroke: 'blue',
          strokeWidth: 2
        }"
            />

            <!-- Với mỗi text trong danh sách -->
            <template v-for="(item, index) in textComputed" :key="item.id">
                <!-- Text mờ bên ngoài -->
                <v-text
                    :config="{
            text: item.text,
            fontSize: 24,
            x: item.x,
            y: item.y,
            fill: 'gray',
            opacity: 0.3,
            listening: false,
            filters: [Konva.Filters.Blur],
            blurRadius: 4
          }"
                />

                <!-- Text rõ bên trong vùng clip -->
                <v-group :config="{ clipFunc: clipSquare }">
                    <v-text
                        :config="{
              text: item.text,
              fontSize: 24,
              x: item.x,
              y: item.y,
              fill: 'black',
              listening: false
            }"
                    />
                </v-group>

                <!-- Text vô hình để kéo -->
                <v-text
                    :config="{
            text: item.text,
            fontSize: 24,
            x: item.x,
            y: item.y,
            fill: 'transparent',
            draggable: true
          }"
                    @dragmove="onDragMove(index, $event)"
                />
            </template>
        </v-layer>
    </v-stage>
</template>

<script setup>
import {computed, onMounted, reactive} from 'vue'
import Konva from 'konva'

// Hình vuông vùng clip
const square = { x: 100, y: 100, size: 400 }

// Danh sách text (mỗi text có vị trí riêng)

// Clip hình vuông
const clipSquare = (ctx) => {
    ctx.rect(square.x, square.y, square.size, square.size)
}

// Kéo từng text theo chỉ số
const onDragMove = (index, e) => {
    const node = e.target
    texts[index].x = node.x()
    texts[index].y = node.y()
}

const texts = reactive([
    { id: 1, text: 'Text A', x: 150, y: 150 },
    { id: 2, text: 'Text B', x: 180, y: 250 },
])

const textComputed = computed(() => {
    return texts
})

onMounted(() => {
    setTimeout(() => {
        console.log(1)
        texts.push({ id: 3, text: 'Text C', x: 200, y: 350 })
    }, 2000)
})
</script>
