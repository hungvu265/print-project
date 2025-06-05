<script setup>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import { reactive } from 'vue';

const list = reactive([
    {
        id: 1,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    },
    {
        id: 2,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    },
    {
        id: 3,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    },
    {
        id: 4,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    },
    {
        id: 5,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    },
    {
        id: 6,
        title: "I'm a smartass daughter",
        image: "https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
    }
])
</script>

<template>
    <div class="container mt-10">
        <h3 class="text-center uppercase text-2xl font-semibold my-10">Nổi bật</h3>
        <Splide :options="{perPage: 4, gap: '1rem'}" :has-track="true">
            <SplideSlide :class="['p-1']" v-for="item in list" :key="item.id">
                <div
                    class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2"
                    data-test-id="product-list-item"
                >
                    <div>
                        <router-link to="/product/1">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    :src="item.image"
                                    loading="eager"
                                    class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0"
                                    style="" alt="I'm a smartass daughter" title="I'm a smartass daughter"
                                    fetchpriority="high" width="600" height="750"></picture>
                            </div>
                        </router-link>
                    </div>
                    <div class="p-1 md:p-2"><h5
                        class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                        title="I'm a smartass daughter"><a href="#" class=""
                                                           tabindex="-1">{{ item.title }}</a></h5><h6
                        class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span></span>
                    </h6>
                        <button class="<md:text-sm btn-fill w-full py-2 uppercase font-semibold"
                                data-test-id="product-list-item-btn" tabindex="-1">
                            <span>Thêm vào giỏ hàng</span></button>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style scoped>

</style>
