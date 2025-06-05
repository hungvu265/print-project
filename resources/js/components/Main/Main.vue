<script setup>

import Hot from "./Hot.vue";
import New from "./New.vue";
import BestSaller from "./BestSaller.vue";
</script>

<template>
    <main id="homePage">
        <div>
            <div class="select-none flex justify-center"><a aria-current="page" href="/vi"
                                                            class="router-link-active router-link-exact-active">
                <picture>
                    <source srcset="https://img.cloudimgs.net/rx/1080x608,q_90,ofmt_webp/s2/s/1/949a5f13d6c5c850.png"
                            media="(max-width: 767px)">
                    <img src="https://img.cloudimgs.net/rx/-,q_90,ofmt_webp/s2/s/1/949a5f13d6c5c850.png" loading="eager"
                         class="w-auto object-contain" style="" alt="SenPrints" fetchpriority="high" width="" height="">
                </picture>
            </a></div>
        </div><!--[-->
        <div class="splide py-2 md:py-4 splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
             id="splide04" role="region" aria-roledescription="carousel">
            <div class="splide__arrows splide__arrows--ltr">
                <button
                    class="splide__arrow z-1 absolute position-center-y btn-fill-black opacity-50 rounded-full fill-white bg-gray-400 p-1 h-10 w-10 center-flex <md:w-7 <md:h-7 splide__arrow--prev left-1 rotate-180"
                    type="button" aria-label="Go to last slide" aria-controls="splide04-track">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                         focusable="false">
                        <path
                            d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </button>
                <button
                    class="splide__arrow z-1 absolute position-center-y btn-fill-black opacity-50 rounded-full fill-white bg-gray-400 p-1 h-10 w-10 center-flex <md:w-7 <md:h-7 splide__arrow--next right-1"
                    type="button" aria-label="Next slide" aria-controls="splide04-track">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                         focusable="false">
                        <path
                            d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </button>
            </div>
            <div class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                 id="splide04-track" style="padding-left: 1rem; padding-right: 1rem;" aria-live="polite"
                 aria-atomic="true">
                <ul class="splide__list" id="splide04-list" role="presentation" style="transform: translateX(-3760px);">
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone01" role="group"
                        aria-roledescription="slide" aria-label="3 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="2">
                            <a href="/vi/category/apparel" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ff3f8cdf0ec6d9aa.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CLOTHING"
                                    title="CLOTHING" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CLOTHING
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone02" role="group"
                        aria-roledescription="slide" aria-label="4 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="3">
                            <a href="/vi/search?s=DRINKWARE&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/3501ac1d8fd0ae38.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="DRINKWARE"
                                    title="DRINKWARE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">DRINKWARE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone03" role="group"
                        aria-roledescription="slide" aria-label="5 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="4">
                            <a href="/vi/search?s=SNAP+CASE&amp;sort=newest&amp;page=1&amp;product=766667" class=""
                               tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ba0a94f4e0f3c36a.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="PHONECASE"
                                    title="PHONECASE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">PHONECASE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone04" role="group"
                        aria-roledescription="slide" aria-label="6 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="5">
                            <a href="/vi/search?s=poster" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8ae9ce59144e8f4d.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="POSTER"
                                    title="POSTER" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">POSTER
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone is-active" id="splide04-clone05"
                        role="group" aria-roledescription="slide" aria-label="1 of 6" style="width: calc(20%);"
                        aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="0">
                            <a href="/vi/search?s=blanket&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8d99e8b97d2298fe.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="BLANKET"
                                    title="BLANKET" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">BLANKET
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone06" role="group"
                        aria-roledescription="slide" aria-label="2 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="1">
                            <a href="/vi/search?s=canvas&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/7cf3ebcf6d36e94b.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CANVAS"
                                    title="CANVAS" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CANVAS
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone07" role="group"
                        aria-roledescription="slide" aria-label="3 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="2">
                            <a href="/vi/category/apparel" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ff3f8cdf0ec6d9aa.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CLOTHING"
                                    title="CLOTHING" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CLOTHING
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone08" role="group"
                        aria-roledescription="slide" aria-label="4 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="3">
                            <a href="/vi/search?s=DRINKWARE&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/3501ac1d8fd0ae38.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="DRINKWARE"
                                    title="DRINKWARE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">DRINKWARE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone09" role="group"
                        aria-roledescription="slide" aria-label="5 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="4">
                            <a href="/vi/search?s=SNAP+CASE&amp;sort=newest&amp;page=1&amp;product=766667" class=""
                               tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ba0a94f4e0f3c36a.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="PHONECASE"
                                    title="PHONECASE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">PHONECASE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone is-prev" id="splide04-clone10" role="group"
                        aria-roledescription="slide" aria-label="6 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="5">
                            <a href="/vi/search?s=poster" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8ae9ce59144e8f4d.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="POSTER"
                                    title="POSTER" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">POSTER
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 is-active is-visible" id="splide04-slide01" role="group"
                        aria-roledescription="slide" aria-label="1 of 6" style="width: calc(20%);">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="0">
                            <a href="/vi/search?s=blanket&amp;sort=newest" class="">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8d99e8b97d2298fe.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="BLANKET"
                                    title="BLANKET" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2">
                                    BLANKET
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 is-visible is-next" id="splide04-slide02" role="group"
                        aria-roledescription="slide" aria-label="2 of 6" style="width: calc(20%);">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="1">
                            <a href="/vi/search?s=canvas&amp;sort=newest" class="">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/7cf3ebcf6d36e94b.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CANVAS"
                                    title="CANVAS" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2">
                                    CANVAS
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 is-visible" id="splide04-slide03" role="group"
                        aria-roledescription="slide" aria-label="3 of 6" style="width: calc(20%);">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="2">
                            <a href="/vi/category/apparel" class="">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ff3f8cdf0ec6d9aa.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CLOTHING"
                                    title="CLOTHING" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2">
                                    CLOTHING
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 is-visible" id="splide04-slide04" role="group"
                        aria-roledescription="slide" aria-label="4 of 6" style="width: calc(20%);">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="3">
                            <a href="/vi/search?s=DRINKWARE&amp;sort=newest" class="">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/3501ac1d8fd0ae38.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="DRINKWARE"
                                    title="DRINKWARE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2">
                                    DRINKWARE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 is-visible" id="splide04-slide05" role="group"
                        aria-roledescription="slide" aria-label="5 of 6" style="width: calc(20%);">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="4">
                            <a href="/vi/search?s=SNAP+CASE&amp;sort=newest&amp;page=1&amp;product=766667" class="">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ba0a94f4e0f3c36a.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="PHONECASE"
                                    title="PHONECASE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2">
                                    PHONECASE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4" id="splide04-slide06" role="group" aria-roledescription="slide"
                        aria-label="6 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="5">
                            <a href="/vi/search?s=poster" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8ae9ce59144e8f4d.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="POSTER"
                                    title="POSTER" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">POSTER
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone is-active" id="splide04-clone11"
                        role="group" aria-roledescription="slide" aria-label="1 of 6" style="width: calc(20%);"
                        aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="0">
                            <a href="/vi/search?s=blanket&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8d99e8b97d2298fe.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="BLANKET"
                                    title="BLANKET" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">BLANKET
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone12" role="group"
                        aria-roledescription="slide" aria-label="2 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="1">
                            <a href="/vi/search?s=canvas&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/7cf3ebcf6d36e94b.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CANVAS"
                                    title="CANVAS" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CANVAS
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone13" role="group"
                        aria-roledescription="slide" aria-label="3 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="2">
                            <a href="/vi/category/apparel" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ff3f8cdf0ec6d9aa.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CLOTHING"
                                    title="CLOTHING" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CLOTHING
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone14" role="group"
                        aria-roledescription="slide" aria-label="4 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="3">
                            <a href="/vi/search?s=DRINKWARE&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/3501ac1d8fd0ae38.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="DRINKWARE"
                                    title="DRINKWARE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">DRINKWARE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone15" role="group"
                        aria-roledescription="slide" aria-label="5 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="4">
                            <a href="/vi/search?s=SNAP+CASE&amp;sort=newest&amp;page=1&amp;product=766667" class=""
                               tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ba0a94f4e0f3c36a.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="PHONECASE"
                                    title="PHONECASE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">PHONECASE
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone16" role="group"
                        aria-roledescription="slide" aria-label="6 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="5">
                            <a href="/vi/search?s=poster" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8ae9ce59144e8f4d.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="POSTER"
                                    title="POSTER" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">POSTER
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone is-active" id="splide04-clone17"
                        role="group" aria-roledescription="slide" aria-label="1 of 6" style="width: calc(20%);"
                        aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="0">
                            <a href="/vi/search?s=blanket&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/8d99e8b97d2298fe.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="BLANKET"
                                    title="BLANKET" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">BLANKET
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone18" role="group"
                        aria-roledescription="slide" aria-label="2 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="1">
                            <a href="/vi/search?s=canvas&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/7cf3ebcf6d36e94b.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CANVAS"
                                    title="CANVAS" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CANVAS
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone19" role="group"
                        aria-roledescription="slide" aria-label="3 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="2">
                            <a href="/vi/category/apparel" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/ff3f8cdf0ec6d9aa.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="CLOTHING"
                                    title="CLOTHING" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">CLOTHING
                                </button>
                            </a></div>
                    </li>
                    <li class="splide__slide p-2 md:p-4 splide__slide--clone" id="splide04-clone20" role="group"
                        aria-roledescription="slide" aria-label="4 of 6" style="width: calc(20%);" aria-hidden="true">
                        <div class="select-none transform transition-transform duration-200 hover:scale-105" index="3">
                            <a href="/vi/search?s=DRINKWARE&amp;sort=newest" class="" tabindex="-1">
                                <picture class="banner-item-img"><!----><img
                                    src="https://img.cloudimgs.net/rx/600x600,c_1,q_90,ofmt_webp/s2/s/1/3501ac1d8fd0ae38.jpg"
                                    loading="lazy" class="w-auto object-contain w-full h-full" alt="DRINKWARE"
                                    title="DRINKWARE" fetchpriority="auto" width="600" height="600"></picture>
                                <button
                                    class="absolute btn-text uppercase font-semibold position-center-x bottom-[15%] px-3 py-1 text-lg bg-light-800 bg-opacity-80 hover:shadow-custom2"
                                    tabindex="-1">DRINKWARE
                                </button>
                            </a></div>
                    </li>
                </ul>
            </div>
        </div>

        <Hot />
        <New />
        <BestSaller />
    </main>
</template>

<style scoped>

</style>
