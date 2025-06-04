<script setup lang="ts">

</script>

<template>
    <main id="cartPage" class="container min-h-95" style="--sprite-url: url('https://v4.cdnjs1.com/images/logo_cart_sprite.webp')"><h1
        class="font-medium text-2xl capitalize my-4 text-center md:text-left">Giỏ hàng của bạn</h1>
        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-8 xl:col-span-9 md:pr-2">
                <div class="flex">
                    <div class="!w-22"></div>
                    <div class="w-full &lt;xl:hidden grid grid-cols-12 font-medium uppercase text-center">
                        <div class="col-span-7">Sản phẩm</div>
                        <div class="w-full col-span-5 grid grid-cols-12">
                            <div class="col-span-3">Giá</div>
                            <div class="col-span-5">Số lượng</div>
                            <div class="col-span-3">Tổng cộng</div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </div>
                <div class="p-4 flex gap-2 border-b" data-test-id="cart-item">
                    <picture><img
                        src="https://img.cloudimgs.net/rx/160x200,c_2,q_90,ofmt_webp/s4/l_p:3105952:7d1c3bf281e373b1/fl_cutter,fl_layer_apply/u_p:3105952:f1c6cd79d9b72d3a/co_rgb:FFFFFF,e_colorize:100/fl_layer_apply/l_p:3105952:662974_sh/fl_layer_apply/u_p:3105952:184d580923f94160/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/468278431/5ea127/t/bfab849f4cbbcd78.jpg"
                        loading="lazy" class="w-auto object-contain !w-22 h-25 mr-2 btn hover:shadow-custom" alt="I'm a smartass daughter" title="Nhấn để xem hình ảnh" fetchpriority="auto" width="160"
                        height="200"></picture>
                    <div class="&lt;md:hidden w-full max-w-[calc(100%-90px)] grid grid-cols-12 h-min gap-2">
                        <div class="col-span-12 xl:col-span-7 grid grid-cols-4 gap-2">
                            <div class="col-span-4 flex"><a href="/vi/i-m-a-smartass-daughter/unisex-standard-t-shirt?color=white&amp;size=s" class="w-full"><h5 class="text-overflow-hidden font-bold"
                                                                                                                                                                 title="I'm a smartass daughter">I'm a
                                smartass daughter</h5></a><span class="xl:hidden btn-text" data-test-id="cart-item-remove"><i class="icon-sen-delete"></i></span></div>
                            <div class="dropdown relative col-span-4 md:col-span-2" data-test-id="cart-item-product-name" data-test-prop="true">
                                <button type="button" class="relative text-overflow-hidden btn-border w-full text-sm pl-2 py-1 z-1 pr-5.5"><span>Unisex Standard T-Shirt</span><i
                                    class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i></button>
                            </div>
                            <div class="dropdown relative col-span-4 sm:col-span-2 md:col-span-1" data-test-id="cart-item-option" data-test-prop="color">
                                <button type="button" class="relative capitalize text-overflow-hidden btn-border w-full text-sm pl-2 py-1 pr-5.5">
                                    <span class="flex">
                                        <div class="rounded-full border-2 hover:border-primary mr-2 border-white" title="white" data-test-id="product-color">
                                            <div class="rounded-full shadow-color relative h-4 w-4" style="background: rgb(255, 255, 255);"></div>
                                        </div>
                                        <span>white</span>
                                    </span>
                                    <i class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i>
                                </button>
                            </div>
                            <div class="dropdown relative col-span-4 sm:col-span-2 md:col-span-1" data-test-id="cart-item-option" data-test-prop="size">
                                <button type="button" class="relative capitalize text-overflow-hidden btn-border w-full text-sm pl-2 py-1 pr-5.5"><span class="flex"><span>s</span></span><i
                                    class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i></button>
                            </div>
                            <div class="col-span-4 &lt;md:text-center">
                                <ul class="pl-5 list-disc mt-3"></ul>
                            </div>
                        </div>
                        <div class="col-span-12 xl:col-span-5 flex">
                            <div class="grid xl:grid-cols-10 grid-cols-6 w-full text-center gap-2">
                                <div class="&lt;xl:hidden col-span-3 font-medium" data-test-id="cart-item-price"><span>$21.99</span></div>
                                <div class="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-4">
                                    <div class="flex justify-center">
                                        <button class="btn-border h-[30px] min-w-[30px] center-flex" data-test-id="cart-item-decrease"><i class="icon-sen-minus"></i></button>
                                        <div class="dropdown relative mx-2 w-full" data-test-id="cart-item-qty-button">
                                            <button type="button" class="relative text-sm btn-border py-1 w-full pr-5.5"><span data-test-id="cart-item-qty">9</span><i
                                                class="float-right absolute right-0 position-center-y z-0 transition rotate-0 icon-sen-menu-down text-2xl"></i></button>
                                        </div>
                                        <button class="btn-border h-[30px] min-w-[30px] center-flex" data-test-id="cart-item-increase"><i class="icon-sen-plus"></i></button>
                                    </div>
                                    <button class="&lt;xl:hidden btn-border-fill-red center-flex text-sm py-1 px-2 mt-2 w-full" data-test-id="cart-item-add-more">Thêm mục khác</button>
                                </div>
                                <div class="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-3 font-medium &lt;xl:center-flex xl:flex xl:flex-col xl:gap-3" data-test-id="cart-item-total-price">
                                    <span>$197.91</span><span class="&lt;xl:hidden ml-2 btn-text" data-test-id="cart-item-remove"><i class="icon-sen-delete"></i></span></div>
                                <button class="&lt;md:hidden xl:hidden col-span-6 md:col-span-2 btn-border-fill-red center-flex text-sm py-1 px-2 w-full text-overflow-hidden" title="Thêm mục khác"
                                        data-test-id="cart-item-add-more">Thêm mục khác
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="md:hidden w-full max-w-[calc(100%-90px)]">
                        <div class="flex"><a href="/vi/i-m-a-smartass-daughter/unisex-standard-t-shirt?color=white&amp;size=s" class="w-full"><h5 class="text-overflow-hidden"
                                                                                                                                                  title="I'm a smartass daughter"
                                                                                                                                                  data-test-id="cart-item-campaign-title">Unisex
                            Standard T-Shirt</h5></a><span class="xl:hidden btn-text" data-test-id="cart-item-remove"><i class="icon-sen-delete"></i></span></div>
                        <div class="font-medium uppercase">white / s</div>
                        <div></div>
                        <div class="mb-1 font-weight-500"><span data-test-id="cart-item-qty"> x9</span><span class="ml-3 font-weight-500"><span
                            data-test-id="cart-item-total-price">$197.91</span></span></div>
                        <div class="flex">
                            <button class="btn-border-fill-red px-2 py-1 text-sm w-full" data-test-id="cart-item-add-more">Thêm mục khác</button>
                            <button class="btn-text-red w-fit px-2 ml-3" data-test-id="cart-item-edit"><u>Chỉnh sửa</u></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-4 xl:col-span-3 md:pl-2 md:h-max sticky top-[100px] z-1"><p class="uppercase font-medium border-b pb-4 mb-4">Tổng phụ <span
                class="text-primary float-right" data-test-id="cart-subtotal">$197.91</span></p>
                <p class="font-semibold mb-4 text-sm"><span>Tổng số lượng</span> <span class="float-right" data-test-id="cart-total-qty">9 món hàng</span></p>
                <p class="mb-4 text-sm"><span class="font-semibold">Vận chuyển và phí</span> <span class="float-right italic">Tính tại quầy thanh toán</span></p>
                <form><input id="email" type="email" pattern="^[\S]+@[\S]+\.[A-Za-z]{2,6}$" class="italic text-xs border w-full p-2" placeholder="Nhập email để thanh toán nhanh">
                    <div class="&lt;md:bottom-fixed &lt;md:border &lt;md:p-1 &lt;md:z-3 w-full bg-white">
                        <button type="submit" class="btn-fill w-full py-2 md:mt-4 font-medium text-xl md:text-base lg:text-xl z-1" dusk="proceed-to-checkout-button"
                                data-test-id="cart-proceed-to-checkout-button"><span class="flex gap-1 items-center justify-center"><i class="icon-sen-lock"></i> Tiến hành thanh toán</span></button>
                    </div>
                </form>
                <div class="payment-gateway-accept" style="--sprite-url: url('https://v4.cdnjs1.com/images/logo_cart_sprite.webp')"><p class="text-sm font-semibold mt-4 mb-2 uppercase">
                    Chúng tôi chấp nhận: </p>
                    <div class="icon-card-container">
                        <div class="icon-card"><i class="payments-sprite payments-sprite-paypal"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-visa"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-master"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-amex"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-sofort"></i></div>
                        <div class="icon-card"><i class="payments-sprite payments-sprite-giropay"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
