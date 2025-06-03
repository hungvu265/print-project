<!-- components/Taskbar.vue -->
<template>
    <nav class="taskbar">
        <ul>
            <li v-for="route in taskbarRoutes" :key="route.path">
                <div v-if="hasChildren(route)">
                    <span>{{ route.meta.icon }} {{ route.meta.label }}</span>
                    <ul>
                        <li v-for="child in getVisibleChildren(route)" :key="child.path">
                            <RouterLink :to="getFullPath(route.path, child.path)">
                                {{ child.meta.label }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <RouterLink :to="route.path">
                        {{ route.meta.icon }} {{ route.meta.label }}
                    </RouterLink>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const taskbarRoutes = router.options.routes
console.log(taskbarRoutes)

const hasChildren = (route) =>
    route.children && route.children.some(c => c.meta?.showInTaskbar)

const getVisibleChildren = (route) =>
    route.children?.filter(c => c.meta?.showInTaskbar) || []

const getFullPath = (parentPath, childPath) =>
    `${parentPath.replace(/\/$/, '')}/${childPath.replace(/^\//, '')}`
</script>

<style scoped>
.taskbar ul {
    list-style: none;
    padding: 0;
}
.taskbar > ul > li {
    margin-bottom: 1rem;
}
.taskbar ul ul {
    padding-left: 1rem;
}
</style>
