<script setup>
import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide';

</script>

<template>
    <div class="container mt-10">
        <h3 class="text-center uppercase text-2xl font-semibold my-10">Nổi bật</h3>
        <Splide :has-track="true" aria-label="..." id="splide01" role="region" aria-roledescription="carousel">
            <div class="splide__arrows splide__arrows--ltr">
                <button
                    class="splide__arrow z-1 absolute position-center-y btn-fill-black opacity-50 rounded-full fill-white bg-gray-400 p-1 h-10 w-10 center-flex <md:w-7 <md:h-7 splide__arrow--prev left-1 rotate-180"
                    type="button" aria-label="Go to last slide" aria-controls="splide01-track">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                         focusable="false">
                        <path
                            d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </button>
                <button
                    class="splide__arrow z-1 absolute position-center-y btn-fill-black opacity-50 rounded-full fill-white bg-gray-400 p-1 h-10 w-10 center-flex <md:w-7 <md:h-7 splide__arrow--next right-1"
                    type="button" aria-label="Next slide" aria-controls="splide01-track">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                         focusable="false">
                        <path
                            d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </button>
            </div>
            <SplideSlide>
                <div
                    class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2"
                    data-test-id="product-list-item">
                    <div><a href="#" class="" tabindex="-1">
                        <div class="w-full pt-[125%]">
                            <picture><img
                                src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
                                loading="eager"
                                class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0"
                                style="" alt="I'm a smartass daughter" title="I'm a smartass daughter"
                                fetchpriority="high" width="600" height="750"></picture>
                        </div>
                    </a></div>
                    <div class="p-1 md:p-2"><h5
                        class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                        title="I'm a smartass daughter"><a href="#" class=""
                                                           tabindex="-1">I'm a smartass daughter</a></h5><h6
                        class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span></span>
                    </h6>
                        <button class="<md:text-sm btn-fill w-full py-2 uppercase font-semibold"
                                data-test-id="product-list-item-btn" tabindex="-1">
                            <span>Thêm vào giỏ hàng</span></button>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div
                    class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2"
                    data-test-id="product-list-item">
                    <div><a href="#" class="" tabindex="-1">
                        <div class="w-full pt-[125%]">
                            <picture><img
                                src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
                                loading="eager"
                                class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0"
                                style="" alt="I'm a smartass daughter" title="I'm a smartass daughter"
                                fetchpriority="high" width="600" height="750"></picture>
                        </div>
                    </a></div>
                    <div class="p-1 md:p-2"><h5
                        class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                        title="I'm a smartass daughter"><a href="#" class=""
                                                           tabindex="-1">I'm a smartass daughter</a></h5><h6
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
