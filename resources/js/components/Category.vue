<script setup>
import {reactive} from "vue";

const colors = reactive([
    {color: 'background: rgb(29, 83, 213)'},
    {color: 'background: rgb(24, 24, 24)'},
    {color: 'background: rgb(238, 28, 52)'},
    {color: 'background: rgb(14, 13, 45)'},
    {color: 'background: rgb(80, 45, 105)'},
    {color: 'background: rgb(0, 148, 69)'},
    {color: 'background: rgb(20, 40, 26)'},
    {color: 'background: rgb(197, 197, 207)'},
    {color: 'background: rgb(58, 60, 67)'},
    {color: 'background: rgb(85, 91, 93)'},
    {color: 'background: rgb(255, 255, 255)'},
    {color: 'background: rgb(255, 82, 38)'},
    {color: 'background: rgb(187, 229, 251)'},
    {color: 'background: rgb(85, 90, 62)'},
    {color: 'background: rgb(91, 43, 66)'},
    {color: 'background: rgb(56, 47, 45)'},
    {color: 'background: rgb(255, 199, 213)'},
    {color: 'background: rgb(248, 166, 40)'},
    {color: 'background: rgb(255, 239, 215)'},
    {color: 'background: rgb(46, 45, 46)'},
    {color: 'background: rgb(1, 149, 71)'},
    {color: 'background: rgb(51, 40, 34)'},
    {color: 'background: rgb(123, 164, 219)'},
    {color: 'background: rgb(238, 238, 238)'},
    {color: 'background: rgb(254, 209, 65)'},
    {color: 'background: rgb(138, 81, 178)'},
    {color: 'background: rgb(50, 121, 255)'},
    {color: 'background: rgb(127, 100, 174)'},
    {color: 'background: rgb(244, 234, 209)'},
    {color: 'background: rgb(196, 198, 197)'},
    {color: 'background: rgb(138, 21, 56)'},
    {color: 'background: rgb(90, 203, 148)'},
    {color: 'background: rgb(67, 225, 255)'},
    {color: 'background: rgb(143, 143, 143)'},
    {color: 'background: rgb(167, 247, 87)'},
    {color: 'background: rgb(125, 32, 40)'},
    {color: 'background: rgb(54, 54, 54)'},
    {color: 'background: rgb(255, 183, 188)'},
    {color: 'background: rgb(106, 52, 96)'},
])
</script>

<template>
    <main id="listingPage" class="container flex flex-wrap">
        <div class="md:w-[66%] lg:w-[75%] md:order-2 w-full lg:pl-2">
            <div class="flex flex-wrap justify-between md:p-3 items-center">
                <div class="flex items-center max-w-full md:max-w-1/2 &lt;md:flex-wrap"><h1 class="text-2xl font-bold text-overflow-hidden">Men: </h1>
                    <div class="ml-2 min-w-max">2574872 kết quả</div>
                </div>
                <div><span class="pr-2">Sắp xếp theo:</span>
                    <div class="dropdown relative inline">
                        <button type="button" class="relative btn-text hover:border-primary-hover pr-5.5">
                            <div class="font-medium">Phổ biến</div>
                            <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i></button>
                    </div>
                </div>
            </div>
            <div class="md:px-3 w-full flex gap-2 md:ml-1 pb-1 small-scroll"><span class="min-w-max hidden md:block">Bộ sưu tập liên quan: </span>
                <div class="w-full overflow-auto"><a href="/vi/collection/great-dane" class="btn-border px-3 py-0 uppercase mx-1" title="Great Dane"><small class="font-semibold whitespace-nowrap">Great
                    Dane</small></a>
                    <a href="/vi/collection/pug" class="btn-border px-3 py-0 uppercase mx-1" title="Pug"><small class="font-semibold whitespace-nowrap">Pug</small></a>
                    <a href="/vi/collection/personalize" class="btn-border px-3 py-0 uppercase mx-1" title="Personalize"><small class="font-semibold whitespace-nowrap">Personalize</small></a>
                    <a href="/vi/collection/custom-name-shirt" class="btn-border px-3 py-0 uppercase mx-1" title="Custom Name Shirt"><small class="font-semibold whitespace-nowrap">Custom Name
                        Shirt</small></a>
                    <a href="/vi/collection/love-dogs" class="btn-border px-3 py-0 uppercase mx-1" title="Love Dogs"><small class="font-semibold whitespace-nowrap">Love
                        Dogs</small></a>
                    <a href="/vi/collection/science-best-seller" class="btn-border px-3 py-0 uppercase mx-1" title="Science Best Seller"><small class="font-semibold whitespace-nowrap">Science
                        Best Seller</small></a>
                    <a href="/vi/collection/teescience" class="btn-border px-3 py-0 uppercase mx-1" title="Teescience"><small
                        class="font-semibold whitespace-nowrap">Teescience</small></a>
                    <a href="/vi/collection/dalmatian-lovers-store" class="btn-border px-3 py-0 uppercase mx-1"
                       title="Dalmatian Lovers Store"><small class="font-semibold whitespace-nowrap">Dalmatian Lovers Store</small></a>
                    <a href="/vi/collection/jack-russell" class="btn-border px-3 py-0 uppercase mx-1" title="Jack Russell"><small class="font-semibold whitespace-nowrap">Jack Russell</small></a>
                    <a href="/vi/collection/love-horses" class="btn-border px-3 py-0 uppercase mx-1" title="Love Horses"><small class="font-semibold whitespace-nowrap">Love Horses</small></a></div>
            </div>
            <div class="lg:grid-cols-3 grid grid-cols-2">
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/gardiner-things-d2/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:563:773:c54a627bf970a675/fl_cutter,fl_layer_apply/u_p:563:773:f97c8fc8d6424662/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:563:773:950092f4f3593947/fl_layer_apply/u_p:563:cb81aa0b790fd473/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/8915540/d078e4e7bd9510731f6d3889982a13d6?_a=AAClqGX"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="GARDINER THINGS D2 - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="GARDINER THINGS D2 - Men's Standard T-Shirt"><a
                            href="/vi/gardiner-things-d2/men's-standard-t-shirt" class="">GARDINER THINGS D2 - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$25.95</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/i-like-wine-and-tennis-and-maybe-3-people-t-shirt/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:848395672d227194/fl_cutter,fl_layer_apply/u_p:3105952:5c686d9586bdf838/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:80ecbd_sh/fl_layer_apply/u_p:3105952:49a4b356879b6fab/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/50239962/71408285f15a9175c27d02e6a97b4393/t/05eca29c67cf2ddf.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="I Like Wine And Tennis and Maybe 3 People T-Shirt - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="I Like Wine And Tennis and Maybe 3 People T-Shirt - Unisex Standard T-Shirt"><a
                            href="/vi/i-like-wine-and-tennis-and-maybe-3-people-t-shirt/unisex-standard-t-shirt" class="">I Like Wine And Tennis and Maybe 3 People T-Shirt - Unisex Standard
                            T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$23.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/great-dane-dad/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/417592651/501d100054ed84e100e7cfb971588e57/t/9e7f3d7c3d56605c.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Great Dane Dad - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Great Dane Dad - Men's Standard T-Shirt"><a
                            href="/vi/great-dane-dad/men's-standard-t-shirt" class="">Great Dane Dad - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/what-i-do-i-read-and-i-know-things-book-lover/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:848395672d227194/fl_cutter,fl_layer_apply/u_p:3105952:5c686d9586bdf838/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:80ecbd_sh/fl_layer_apply/u_p:3105952:49a4b356879b6fab/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/59150363/5521989df495a311de5750f5770a1297/t/7e1d3d5a22ff3fc8.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="What I Do I Read And I Know Things Book Lover - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="What I Do I Read And I Know Things Book Lover - Unisex Standard T-Shirt"><a
                            href="/vi/what-i-do-i-read-and-i-know-things-book-lover/unisex-standard-t-shirt" class="">What I Do I Read And I Know Things Book Lover - Unisex Standard T-Shirt</a></h5>
                            <h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$21.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/dogs-i-support-putting-animal-abusers-to-sleep-dog-tshirt/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/453858497/e74ca8/t/c0be2bfbf354ac6c.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="I Support Putting Animal Abusers To Sleep Dog TShirt - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="I Support Putting Animal Abusers To Sleep Dog TShirt - Unisex Standard T-Shirt"><a
                            href="/vi/dogs-i-support-putting-animal-abusers-to-sleep-dog-tshirt/unisex-standard-t-shirt" class="">I Support Putting Animal Abusers To Sleep Dog TShirt - Unisex Standard
                            T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/if-the-earth-was-flat-cat-is-would-have-pushed-everything-off-it-by-now/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/272317196/c5112be03521962c150e451429d04a09/t/113b008116301d8e.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="If The Earth Was Flat Cat Is Would Have Pushed Everything Off It By Now - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="If The Earth Was Flat Cat Is Would Have Pushed Everything Off It By Now - Unisex Standard T-Shirt"><a
                            href="/vi/if-the-earth-was-flat-cat-is-would-have-pushed-everything-off-it-by-now/unisex-standard-t-shirt" class="">If The Earth Was Flat Cat Is Would Have Pushed
                            Everything Off It By Now - Unisex Standard T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span>
                        </h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/every-snack-you-make-every-meal-you-bake-havanese-back-t-shirt/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:848395672d227194/fl_cutter,fl_layer_apply/u_p:3105952:5c686d9586bdf838/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:80ecbd_sh/fl_layer_apply/u_p:3105952:49a4b356879b6fab/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/106414918/c5965977e002a86e45356dba6af4c417/t/720fc8fe603778a5.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="Every snack you make Every meal you bake Havanese (Back) T-Shirt - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="Every snack you make Every meal you bake Havanese (Back) T-Shirt - Unisex Standard T-Shirt"><a
                            href="/vi/every-snack-you-make-every-meal-you-bake-havanese-back-t-shirt/unisex-standard-t-shirt" class="">Every snack you make Every meal you bake Havanese (Back) T-Shirt
                            - Unisex Standard T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$23.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/if-your-1/unisex-sweatshirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3133799:76eb7db5664bb2d7/fl_cutter,fl_layer_apply/u_p:3133799:56ba75b83ef68e24/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3133799:acd6cecd5c71d1c9/fl_layer_apply/u_p:3133799:99f5f7fedf12aaa4/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/6049234/99ae5ded70341ce20ea93ea8c55b41c1?_a=AACkGGX"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Sweatshirt"
                                    title="If YOUR NAME Can't Fix it ! We're all screwed - Unisex Sweatshirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="If YOUR NAME Can't Fix it ! We're all screwed - Unisex Sweatshirt">
                            <a href="/vi/if-your-1/unisex-sweatshirt" class="">If YOUR NAME Can't Fix it ! We're all screwed - Unisex Sweatshirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$33.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                        <div class="italic absolute left-0 top-0 bg-primary text-contrast opacity-70 text-sm py-1 px-2 select-none md:text-md md:py-2 md:px-3" data-test-id="personalize-tag">Cá nhân
                            hóa nó! <i class="icon-sen-lead-pencil"></i></div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/great-dane-mom-aho/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/417466652/df0e7003dacca0be7053c71a0c6639c0/t/2bad1aa652f4ebb9.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Great Dane Mom - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Great Dane Mom - Men's Standard T-Shirt"><a
                            href="/vi/great-dane-mom-aho/men's-standard-t-shirt" class="">Great Dane Mom - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/womens-dalmatian-dog-pattern-friends-tee-dalmatian-dog-lover-v-neck-t-shirt/men's-premium-tshirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3108552:25d5a439e09e5284/fl_cutter,fl_layer_apply/u_p:3108552:8b7d69718df0e096/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3108552:29484a_sh/fl_layer_apply/u_p:3108552:6c4eeda50edcc771/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/28143947/40bf77a691aaaffd591c2d59400eb6c9"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Premium Tshirt"
                                    title="Womens Dalmatian Dog Pattern Friends Tee, Dalmatian Dog Lover V-Neck T-Shirt - Men's Premium Tshirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="Womens Dalmatian Dog Pattern Friends Tee, Dalmatian Dog Lover V-Neck T-Shirt - Men's Premium Tshirt"><a
                            href="/vi/womens-dalmatian-dog-pattern-friends-tee-dalmatian-dog-lover-v-neck-t-shirt/men's-premium-tshirt" class="">Womens Dalmatian Dog Pattern Friends Tee, Dalmatian Dog
                            Lover V-Neck T-Shirt - Men's Premium Tshirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span
                            class="text-primary font-medium">$28.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/life-is-better-with-a-dalmatian-dog-lover-t-shirt/men's-premium-tshirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3108552:25d5a439e09e5284/fl_cutter,fl_layer_apply/u_p:3108552:8b7d69718df0e096/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3108552:29484a_sh/fl_layer_apply/u_p:3108552:6c4eeda50edcc771/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/28140576/84c50ce3625ee8ad1ee3fd69996b624a"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Premium Tshirt"
                                    title="Life Is Better With A Dalmatian Dog Lover T-Shirt - Men's Premium Tshirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="Life Is Better With A Dalmatian Dog Lover T-Shirt - Men's Premium Tshirt"><a
                            href="/vi/life-is-better-with-a-dalmatian-dog-lover-t-shirt/men's-premium-tshirt" class="">Life Is Better With A Dalmatian Dog Lover T-Shirt - Men's Premium Tshirt</a></h5>
                            <h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$28.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/jack-russell-dad/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/417507976/a06e5a5f4c735af5dc72d8b43ca5dbf1/t/e99db8fce222d13b.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Jack Russell Dad - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Jack Russell Dad - Men's Standard T-Shirt"><a
                            href="/vi/jack-russell-dad/men's-standard-t-shirt" class="">Jack Russell Dad - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/not-a-pug-zc/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/453489102/6be645/t/fc86e733c3cfbc02.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="I'm Telling You I'm Not A Pug - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="I'm Telling You I'm Not A Pug - Men's Standard T-Shirt"><a
                            href="/vi/not-a-pug-zc/men's-standard-t-shirt" class="">I'm Telling You I'm Not A Pug - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/of-a-pug-ahola/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/231769793/c87658ee4eec9bec89ed834df82c75f9/t/53d4b816a5ee4a9e.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Anatomy Of A Pug - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Anatomy Of A Pug - Men's Standard T-Shirt"><a
                            href="/vi/of-a-pug-ahola/men's-standard-t-shirt" class="">Anatomy Of A Pug - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/donkey-common-sense-is-like/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/459364761/dda124/t/dd8aa63d8a24dddd.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="Common sense is like - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Common sense is like - Unisex Standard T-Shirt"><a
                            href="/vi/donkey-common-sense-is-like/unisex-standard-t-shirt" class="">Common sense is like - Unisex Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/horse-i-seriously-need-a-speed-bump-between-my-brain-and-my-mouth/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/459283304/5a0aa8/t/4b58cac6230221b8.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="I seriously need a speed bump between my brain and my mouth - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="I seriously need a speed bump between my brain and my mouth - Unisex Standard T-Shirt"><a
                            href="/vi/horse-i-seriously-need-a-speed-bump-between-my-brain-and-my-mouth/unisex-standard-t-shirt" class="">I seriously need a speed bump between my brain and my mouth -
                            Unisex Standard T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/pew-pew-madafakas-boston-terrier-t-shirt/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:848395672d227194/fl_cutter,fl_layer_apply/u_p:3105952:5c686d9586bdf838/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:80ecbd_sh/fl_layer_apply/u_p:3105952:49a4b356879b6fab/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/28683500/29d83fd9096b010e2e317dc9461a9763"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="Pew Pew Madafakas Boston Terrier T-Shirt - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Pew Pew Madafakas Boston Terrier T-Shirt - Unisex Standard T-Shirt">
                            <a href="/vi/pew-pew-madafakas-boston-terrier-t-shirt/unisex-standard-t-shirt" class="">Pew Pew Madafakas Boston Terrier T-Shirt - Unisex Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$23.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/relax-1/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:d4a35a30f1dd2716/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/6048876/9be2aa40cb6148afcc520c4b3c58649a?_a=AACkGGX"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Relax YOUR NAME is Here - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Relax YOUR NAME is Here - Men's Standard T-Shirt"><a
                            href="/vi/relax-1/men's-standard-t-shirt" class="">Relax YOUR NAME is Here - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$25.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                        <div class="italic absolute left-0 top-0 bg-primary text-contrast opacity-70 text-sm py-1 px-2 select-none md:text-md md:py-2 md:px-3" data-test-id="personalize-tag">Cá nhân
                            hóa nó! <i class="icon-sen-lead-pencil"></i></div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/horse-when-i-told-you-i-was-normal/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/459283193/600779/t/fcc09cc7930d9643.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="When i told you i was normal - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="When i told you i was normal - Unisex Standard T-Shirt"><a
                            href="/vi/horse-when-i-told-you-i-was-normal/unisex-standard-t-shirt" class="">When i told you i was normal - Unisex Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/sleeps-with-a-chihuahua-zv/men's-tank-top" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3144917:483d6e8af3ed7f72/fl_cutter,fl_layer_apply/u_p:3144917:2f2c24b9d924c860/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3144917:9d82f2_sh/fl_layer_apply/u_p:3144917:f0118beff7acc31e/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/465534676/fceac3/t/3dcf8315fcc82038.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Tank Top"
                                    title="Sleeps With a Chihuahua - Men's Tank Top" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Sleeps With a Chihuahua - Men's Tank Top"><a
                            href="/vi/sleeps-with-a-chihuahua-zv/men's-tank-top" class="">Sleeps With a Chihuahua - Men's Tank Top</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$25.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/i-love-dad-jack-russell/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/263152134/9eca7ff2921d2548ec51a505fa79e9e9/t/8de63260bf653f7e.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="I Love Dad Jack Russell - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="I Love Dad Jack Russell - Men's Standard T-Shirt"><a
                            href="/vi/i-love-dad-jack-russell/men's-standard-t-shirt" class="">I Love Dad Jack Russell - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/cats-my-level-of-sarcasm-depends-on-your-level-of-stupidity/unisex-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/456889683/fac8a2/t/f62a0ade3d4a55a0.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Standard T-Shirt"
                                    title="My level of sarcasm depends on your level of stupidity - Unisex Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center"
                                                    title="My level of sarcasm depends on your level of stupidity - Unisex Standard T-Shirt"><a
                            href="/vi/cats-my-level-of-sarcasm-depends-on-your-level-of-stupidity/unisex-standard-t-shirt" class="">My level of sarcasm depends on your level of stupidity - Unisex
                            Standard T-Shirt</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$24.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/beer-things-d2/unisex-hoodie" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3110997:8f2061820ffb7ca0/fl_cutter,fl_layer_apply/u_p:3110997:7640f5b12b57d728/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3110997:efe2055b07d7d7cb/fl_layer_apply/u_p:3110997:22569479cfcd21c3/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/9390049/8324d4a67a2d0a24a6da7a74da8a3c35?_a=AAClqGX"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Unisex Hoodie" title="BEER THINGS D2 - Unisex Hoodie"
                                    fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="BEER THINGS D2 - Unisex Hoodie"><a
                            href="/vi/beer-things-d2/unisex-hoodie" class="">BEER THINGS D2 - Unisex Hoodie</a></h5><h6 class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span
                            class="text-primary font-medium">$42.95</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
                <div class="p-1 md:p-3">
                    <div class="relative product-list-item select-none overflow-hidden w-full hover:shadow-custom2" data-test-id="product-list-item">
                        <div><a href="/vi/sleeps-with-pugs/men's-standard-t-shirt" class="">
                            <div class="w-full pt-[125%]">
                                <picture><img
                                    src="https://img.cloudimgs.net/rx/600x750,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/465985461/96852f/t/0dc76bc1a66e7ac5.jpg"
                                    loading="lazy" class="w-auto object-contain transition-transform duration-200 absolute top-0 left-0" alt="Men's Standard T-Shirt"
                                    title="Sleeps With Pugs - Men's Standard T-Shirt" fetchpriority="" width="600" height="750"></picture>
                            </div>
                        </a></div>
                        <div class="p-1 md:p-2"><h5 class="btn-text md:text-lg font-medium text-overflow-hidden text-center" title="Sleeps With Pugs - Men's Standard T-Shirt"><a
                            href="/vi/sleeps-with-pugs/men's-standard-t-shirt" class="">Sleeps With Pugs - Men's Standard T-Shirt</a></h5><h6
                            class="block h-12 flex flex-wrap justify-center gap-x-2 items-center"><span class="text-primary font-medium">$22.99</span></h6>
                            <button class="&lt;md:text-sm btn-fill w-full py-2 uppercase font-semibold" data-test-id="product-list-item-btn"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <nav data-v-34dbb228="" class="-space-x-px flex flex justify-end md:p-3"><span data-v-34dbb228=""
                                                                                           class="px-3 h-10 border border-primary bg-primary text-contrast flex items-center !rounded-r-none">1</span><span
                data-v-34dbb228="" class="px-3 h-10 btn-border-fill border-gray-300 flex items-center !rounded-l-none">2</span><span data-v-34dbb228=""
                                                                                                                                     class="px-3 h-10 flex items-center">...</span><span
                data-v-34dbb228="" class="px-3 h-10 btn-border-fill border-gray-300 flex items-center !rounded-r-none"><i data-v-34dbb228="" class="icon-sen-chevron-right"></i></span><span
                data-v-34dbb228="" class="px-3 h-10 btn-border-fill border-gray-300 flex items-center !rounded-l-none"><i data-v-34dbb228="" class="icon-sen-chevron-double-right"></i></span></nav>
        </div>
        <div class="h-max sticky top-[100px] md:order-1 text-[#C4C4C4] w-full md:w-[33%] lg:w-[25%] lg:pr-2">
            <div><a aria-current="page" href="/vi/category/apparel-men" class="router-link-active router-link-exact-active btn-fill px-2 rounded-full text-xs">Xóa bộ lọc</a></div>
            <div><p class="font-12x mb-3 pb-3 border-b uppercase &lt;md:text-center">Khám phá</p>
                <div class="mb-8">
                    <div>
                        <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                              class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                            class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">T-Shirts</span></a><i class="btn-text-black text-xl icon-sen-plus"></i></div>
                        <div class="sub-categories pl-3" style="display: none;">
                            <div>
                                <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                                      class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                                    class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">V-Neck Shirts</span></a></div>
                                <div class="sub-categories pl-3" style="display: none;"></div>
                            </div>
                            <div>
                                <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                                      class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                                    class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Premium Fitted Tees</span></a></div>
                                <div class="sub-categories pl-3" style="display: none;"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                              class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                            class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Long Sleeves</span></a></div>
                        <div class="sub-categories pl-3" style="display: none;"></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                              class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                            class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Tank Tops</span></a><i class="btn-text-black text-xl icon-sen-plus"></i></div>
                        <div class="sub-categories pl-3" style="display: none;">
                            <div>
                                <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                                      class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                                    class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Unisex Tanks</span></a></div>
                                <div class="sub-categories pl-3" style="display: none;"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                              class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                            class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Hoodies</span></a></div>
                        <div class="sub-categories pl-3" style="display: none;"></div>
                    </div>
                    <div>
                        <div class="flex justify-between items-center p-1"><a aria-current="page" href="#"
                                                                              class="router-link-active router-link-exact-active btn-text-black pl-0 flex items-center"><i
                            class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2">Sweatshirts</span></a></div>
                        <div class="sub-categories pl-3" style="display: none;"></div>
                    </div>
                </div>
            </div>
            <div><p class="font-12x mb-3 pb-3 border-b uppercase &lt;md:text-center">Sản phẩm</p>
                <div class="mb-8"><a aria-current="page" href="#" class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                    class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Standard T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3110997"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Hoodie</span></a>
                    <a aria-current="page" href="#"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Premium T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3133799"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Sweatshirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3102696"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Men's Long Sleeved T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3133945"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Women's V-Neck T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3112080"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Men's Zip Hoodie</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3144917"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Men's Tank Top</span></a>
                    <a aria-current="page" href="#"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Women's Soft Style Fitted T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=17541628"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Jersey Tank</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3144918"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Women's Tank Top</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=3133944"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Men's V-Neck T-Shirt</span></a>
                    <a aria-current="page"
                       href="/vi/category/apparel-men?product=17531260"
                       class="router-link-active router-link-exact-active btn-text-black p-1 block flex items-center"><i
                        class="text-xl icon-sen-checkbox-blank"></i><span class="ml-2 max-line-1 text-left">Unisex Jersey SS V-Neck T-Shirt</span></a></div>
            </div>
            <div><p class="font-12x mb-3 pb-3 border-b uppercase &lt;md:text-center">Giá</p>
                <p class="text-center text-555 mb-3">$0.00 - $55.00</p>
                <div class="vue-slider vue-slider-ltr mb-8 mb-8" style="padding: 7px 0px; width: auto; height: 4px;">
                    <div class="vue-slider-rail">
                        <div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 100%; transition-property: width, left; transition-duration: 0.5s;"></div>
                        <div class="vue-slider-dot" aria-valuetext="0" role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="55" aria-orientation="horizontal" tabindex="0"
                             style="width: 14px; height: 14px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0.5s;">
                            <div class="vue-slider-dot-handle"></div>
                        </div>
                        <div class="vue-slider-dot" aria-valuetext="55" role="slider" aria-valuenow="55" aria-valuemin="0" aria-valuemax="55" aria-orientation="horizontal" tabindex="0"
                             style="width: 14px; height: 14px; transform: translate(-50%, -50%); top: 50%; left: 100%; transition: left 0.5s;">
                            <div class="vue-slider-dot-handle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="filter-color mt-3"><p class="font-12x mb-3 pb-3 border-b uppercase &lt;md:text-center">Màu sắc</p>
                <div class="flex flex-wrap">
                    <template v-for="color in colors" :key="color.color">
                        <a href="#" class="router-link-active router-link-exact-active">
                            <div class="rounded-full border-2 hover:border-primary m-0.5 p-0.5 border-white hover:shadow-color-active">
                                <div class="rounded-full shadow-color relative h-8 w-8" :style="color.color"></div>
                            </div>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
