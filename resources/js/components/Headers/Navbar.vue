<script setup>

</script>

<template>
    <nav
        class="z-1 bg-white relative container flex gap-8 items-center justify-center md:justify-start py-3 md:py-1 px-3">
        <button id="headerShowMenu" type="button" aria-label="menu"
                class="md:hidden absolute left-2 btn-text text-2xl icon-sen-menu"></button>
        <a href="#" class="md:hidden absolute left-10 btn-text uppercase text-xl icon-sen-info-outline"
           id="headerPageFAQ" title="FAQ"></a><a aria-current="page" href="#"
                                                 class="router-link-active router-link-exact-active md:my-2"
                                                 id="headerLinkLogo">
        <picture aria-label="home"><!----><img id="headerLogo"
                                               src="https://img.cloudimgs.net/rx/256x256,q_90,ofmt_webp/s2/s/1/cf8b6471bc35cc73.png"
                                               loading="lazy" class="w-auto object-contain h-6 md:h-8" style=""
                                               alt="SenPrints" fetchpriority="auto" width="256" height="256"></picture>
    </a><!--[--><!---->
        <div class="hidden gap-2 select-none deliver-to-location lg:flex"><i
            class="icon-sen-delivery-truck-2 text-5xl"></i><span class="whitespace-nowrap flex flex-col justify-center">Giao đến<br><strong>Hanoi, Vietnam</strong></span>
            <div class="flex items-center">
                <div id="languageSelect" class="dropdown relative">
                    <button type="button" class="relative">
                        <div class="flex items-center p-1" data-test-id="language-select-btn"><img
                            class="country-flag border-[#e8e8e8] border-[0.5px] <md:min-w-[1.8rem] min-w-[2.5rem]"
                            alt="flag-VN" src="https://v4.cdnjs1.com/images/country-flag/vn.svg"><!----></div><!---->
                    </button><!----></div>
            </div>
        </div>
        <form class="<md:hidden flex flex-grow focus-within:outline outline-1 outline-primary border-radius-override">
            <input id="headerSearchInput" placeholder="Tìm các chủ đề yêu thích của bạn (Ctrl + /)" type="search"
                   class="w-full <md:bg-white bg-[#e8e8e8] px-2 py-2 border-radius-override !rounded-r-none">
            <button id="headerSearchButton" aria-label="search" type="submit"
                    class="btn-text bg-[#e8e8e8] px-2 text-2xl border-radius-override !rounded-l-none">
                <div class="flex items-center justify-center"><span class="icon-sen-search"></span></div>
            </button>
        </form>
        <a id="headerSellerLogin" target="_blank" href="#"
           class="<md:hidden btn-text min-w-[fit-content] font-semibold uppercase text-[13px]">Đăng nhập người bán</a>
        <div class="<md:absolute <md:right-3 min-w-[fit-content] flex gap-2">
            <div id="languageSelect" class="dropdown relative justify-self-end md:hidden">
                <button type="button" class="relative">
                    <div class="flex items-center p-1" data-test-id="language-select-btn"><img
                        class="country-flag border-[#e8e8e8] border-[0.5px] <md:min-w-[1.8rem] min-w-[2.5rem]"
                        alt="flag-VN" src="https://v4.cdnjs1.com/images/country-flag/vn.svg"><!----></div><!---->
                </button><!----></div>
            <a href="#" class="btn-text uppercase text-xl icon-sen-info-outline <md:hidden"
               id="headerPageFAQ" title="Câu hỏi thường gặp"></a>
            <router-link to="/cart" class="btn-text uppercase text-xl font-semibold relative">
                <i class="icon-sen-cart" style="line-height: 1.3;"></i>
                <span class="badge bg-red-600">0</span>
            </router-link>
<!--            <a href="#" class="btn-text uppercase text-xl font-semibold relative"-->
<!--               id="headerCartButton" title="Xem giỏ hàng">-->
<!--                -->
<!--            </a>-->
        </div>
        <!--]--></nav>
</template>

<style scoped>

</style>