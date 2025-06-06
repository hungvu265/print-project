<script setup>
import {reactive} from "vue";

const data = reactive([
    {link: '#', title: 'Men', children: []},
    {link: '#', title: 'Women', children: []},
    {
        link: '#', title: 'Trending', children: [
            {link: '#', title: 'St. Patrick\'s Day'},
            {link: '#', title: 'Veterans'},
            {link: '#', title: 'Halloween'},
            {link: '#', title: 'Day of the Dead'},
            {link: '#', title: 'Thanksgiving Day'},
        ]
    },
    {link: '#', title: 'Hobbies', children: [
            {link: '#', title: 'Beer'},
            {link: '#', title: 'Yoga'},
            {link: '#', title: 'Books'},
        ]},
    {link: '#', title: 'Jobs', children: []},
    {link: '#', title: 'Holiday Ornaments', children: []},
    {link: '#', title: 'Accessories', children: []},
    {link: '#', title: 'Home & Living', children: []},
    {link: '#', title: 'Youth & Baby', children: []},
])
</script>

<template>
    <ul id="headerMenu" class="absolute container w-full px-3 bg-[#e8e8e8] max-h-[70vh] <md:hidden transition-default transform md:relative md:flex md:py-2 md:bg-white md:flex-wrap">
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center">
                <a aria-current="page" href="#" class="router-link-active router-link-exact-active btn-text w-full text-overflow-hidden py-1">
                    Trang chủ
                </a>
            </div>
        </li>

        <li class="relative menu-item text-lg mr-3" v-for="item in data">
            <div class="flex justify-between items-center">
                <router-link to="/category/1" class="btn-text w-full text-overflow-hidden py-1">{{ item.title }}</router-link>
                <i v-if="item.children.length" class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul v-if="item.children.length" class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg" v-for="child in item.children">
                    <div class="flex justify-between items-center">
                        <router-link to="/category/1" class="btn-text w-full text-overflow-hidden py-1">{{ child.title }}</router-link>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped>

</style>
