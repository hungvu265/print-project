<script setup>

</script>

<template>
    <footer id="footer" class="lg:min-h-[450px] md:min-h-[650px] <md:min-h-[900px]">
        <div></div>
        <div class="container flex flex-wrap text-center lg:text-left mb-10">
            <div class="w-full lg:w-[40%] lg:order-2 flex flex-wrap text-center lg:text-left mt-10">
                <div class="pt-3 hidden"><a href="/vi/bot" class="">Bot</a></div>
                <div class="w-full md:w-1/2 <md:my-5"><p class="uppercase font-semibold">Thông tin &amp; hỗ trợ</p>

                    <div class="pt-3 capitalize"><a href="/vi/page/about" class="btn-text">About Us</a></div>
                    <div class="pt-3 capitalize"><a href="/vi/order/track" class="btn-text">Theo dõi đơn
                        hàng</a></div>
                    <div class="pt-3 capitalize"><a href="/vi/page/faq" class="btn-text">Câu hỏi thường gặp</a>
                    </div>
                    <div class="pt-3 capitalize"><a href="/vi/page/contact-us" class="btn-text">Contact Us</a>
                    </div>
                </div>
                <div class="w-full md:w-1/2 <md:my-5"><p class="uppercase font-semibold">Chính sách</p>
                    <div class="pt-3 capitalize"><a href="/vi/page/return-policy" class="btn-text">Return
                        Policy</a></div>
                    <div class="pt-3 capitalize"><a href="/vi/page/shipping-policy" class="btn-text">Chính sách
                        vận chuyển</a></div>
                    <div class="pt-3 capitalize"><a href="/vi/page/terms-of-service" class="btn-text">Terms
                        &amp; Conditions</a></div>
                    <div class="pt-3 capitalize"><a href="/vi/page/privacy" class="btn-text">Privacy Policy</a>
                    </div>
                    <div class="pt-3 capitalize"><a href="/vi/page/dmca" class="btn-text">DMCA</a></div>
                </div>
            </div>
            <div class="md:hidden w-full flex justify-center mt-5 flex-wrap">
                <div id="languageSelect" class="dropdown relative px-1 mt-5">
                    <button type="button" class="relative border pr-5.5">
                        <div class="flex items-center p-1" data-test-id="language-select-btn"><span
                            class="vti__flag vn"></span><span>Tiếng Việt</span></div>
                        <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i>
                    </button><!----></div>
                <div id="currencySelect" class="dropdown relative px-1 mt-5">
                    <button type="button" class="relative border pr-5.5">
                        <div class="flex items-center p-1 min-w-20" data-test-id="currency-select-btn"><span
                            class="vti__flag us"></span><span>$</span><span class="ml-2">US Dollar</span></div>
                        <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i>
                    </button><!----></div>
            </div>
            <div class="w-full md:w-1/2 lg:w-[30%] lg:order-1 text-sm mt-10">
                <div class="flex <lg:justify-center my-5"><a aria-current="page" href="/vi"
                                                             class="router-link-active router-link-exact-active">
                    <picture><!----><img id="footerLogo"
                                         src="https://img.cloudimgs.net/rx/256x256,q_90,ofmt_webp/s2/s/1/cf8b6471bc35cc73.png"
                                         loading="lazy" class="w-auto object-contain h-10 -z-1" style="" alt="SenPrints"
                                         fetchpriority="auto" width="256" height="256"></picture>
                </a></div><!----><!----><!---->
                <div class="flex <lg:justify-center items-center"><span>Số điện thoại: </span>
                    <div id="contactPhoneDropdown" class="dropdown relative ml-0.5">
                        <button type="button" class="px-3 py-1 pr-5.5 relative">
                            <div class="flex items-center"><img
                                src="https://v4.cdnjs1.com/images/country-flag/world.svg" alt="flag" class="mr-1 h-4"
                                loading="lazy"><span>+1 (424) 389-4044</span></div>
                            <i
                                class="rotate-0 icon-sen-menu-down text-2xl float-right absolute right-0 position-center-y z-0 transition"></i>
                        </button><!----></div>
                </div>
                <div><span>Cần hỗ trợ? <a href="/vi/page/contact-us" class="text-primary hover:text-primary-hover">Gửi vé</a></span>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-[30%] lg:order-3 mt-10"><p class="font-semibold uppercase mb-5">
                Đăng ký nhận bản tin của chúng tôi</p>
                <p class="mb-5">Cho bán hàng, nội dung độc quyền và nhiều hơn nữa!</p>
                <form class="flex <lg:px-10"><input id="newsletter_email" autocomplete="email" type="email"
                                                    class="border rounded-l-[var(--sp-border-radius-2)] px-2 py-1 w-full"
                                                    name="newsletter_email" placeholder="Nhập email của bạn">
                    <button type="submit"
                            class="px-2 py-1 bg-gray-600 text-white border border-l-0 rounded-r-[var(--sp-border-radius-2)] capitalize whitespace-nowrap">
                        Đăng ký
                    </button>
                </form>
                <div class="payment-gateway-accept"
                     style="--sprite-url:url('https://v4.cdnjs1.com/images/logo_cart_sprite.webp');"><p
                    class="text-sm font-semibold mt-4 mb-2 uppercase">Chúng tôi chấp nhận: </p>
                    <div class="icon-card-container">
                        <div class="icon-card"><i class="payments-sprite payments-sprite-paypal"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-visa"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-master"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-amex"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-sofort"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-giropay"></i></div>
                    </div>
                </div>
                <p class="font-semibold mt-5">Theo dõi chúng tôi</p>
                <div class="contact-icon my-3 text-4xl"><a href="https://www.facebook.com/senprintsofficial"
                                                           target="_blank" class="mr-2" aria-label="facebook"
                                                           rel="noopener noreferrer nofollow"><span><i
                    class="icon-sen-facebook"></i></span></a><a href="https://www.instagram.com/senprints/"
                                                                target="_blank" class="mr-2" aria-label="instagram"
                                                                rel="noopener noreferrer nofollow"><span><i
                    class="icon-sen-instagram"></i></span></a><!----><!----><!----><!----><!----></div>
            </div>
        </div>
        <div></div>
        <div id="copyright" class="<md:hidden <md:mb-20 border-t py-2">
            <div class="container px-3 flex flex-wrap md:justify-between items-center justify-center"><small
                class="<md:order-1 <md:w-full font-weight-500 text-center">© 2020-2025 SenPrints</small>
                <div class="my-3 flex flex-wrap items-center gap-2 justify-center <md:w-full <md:order-0"><span
                    class="text-sm">Ngôn ngữ/Tiền tệ: </span>
                    <div id="languageSelect" class="dropdown relative">
                        <button type="button" class="relative border pr-5.5">
                            <div class="flex items-center p-1" data-test-id="language-select-btn"><span
                                class="vti__flag vn"></span><span>Tiếng Việt</span></div>
                            <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i>
                        </button><!----></div>
                    <div id="currencySelect" class="dropdown relative">
                        <button type="button" class="relative border pr-5.5">
                            <div class="flex items-center p-1 min-w-20" data-test-id="currency-select-btn"><span
                                class="vti__flag us"></span><span>$</span><span class="ml-2">US Dollar</span></div>
                            <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i>
                        </button><!----></div>
                </div>
            </div>
        </div>
        <div></div>
    </footer>
</template>

<style scoped>

</style>