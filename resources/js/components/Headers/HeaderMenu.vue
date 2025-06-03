<script setup>

</script>

<template>
    <ul id="headerMenu"
        class="absolute container w-full px-3 bg-[#e8e8e8] max-h-[70vh] <md:hidden transition-default transform md:relative md:flex md:py-2 md:bg-white md:flex-wrap">
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center">
                <a aria-current="page" href="#"
                   class="router-link-active router-link-exact-active btn-text w-full text-overflow-hidden py-1">
                    Trang chủ
                </a>
            </div>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Men</a>
            </div>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Women</a>
            </div>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Trending</a><i
                class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">St.
                        Patrick's Day</a></div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Veterans</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Halloween</a><i
                        class="btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
                    </div>
                    <ul class="left-[100%] top-0 sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Halloween
                                Day</a></div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Halloween
                                Costume</a></div>
                        </li>
                    </ul>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Day
                        of the Dead</a></div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Thanksgiving
                        Day</a></div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Christmas</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Family</a><i
                        class="btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
                    </div>
                    <ul class="left-[100%] top-0 sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Father</a>
                            </div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Father's
                                Day</a></div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Mother</a>
                            </div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Mother's
                                Day</a></div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Family
                                &amp; Relationships</a></div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Friend</a>
                            </div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Papa</a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Animals</a><i
                        class="btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
                    </div>
                    <ul class="left-[100%] top-0 sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Dog</a>
                            </div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Cat</a>
                            </div>
                        </li>
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Horses</a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Funny</a>
                    </div>
                </li>
            </ul>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Hobbies</a><i
                class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Beer</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Yoga</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Books</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Hunting</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Photographer</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Wine</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Badminton</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Basketball</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Bicycle</a>
                    </div>
                </li>
            </ul>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Jobs</a><i
                class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Teacher</a><i
                        class="btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
                    </div>
                    <ul class="left-[100%] top-0 sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                        <li class="relative menu-item text-lg">
                            <div class="flex justify-between items-center"><a href="#"
                                                                              class="btn-text w-full text-overflow-hidden py-1">Back
                                To School</a></div>
                        </li>
                    </ul>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Roofer</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Trucker</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Pilot</a>
                    </div>
                </li>
            </ul>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Holiday
                Ornaments</a></div>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center">
                <span class="btn-text w-full text-overflow-hidden py-1">Accessories</span>
                <i class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Blanket</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Sherpa
                        Fleece Blanket</a></div>
                </li>
            </ul>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Home
                &amp; Living</a><i
                class="transform rotate-90 btn-text text-2xl md:text-xl icon-sen-chevron-right transition-default min-w-[20px]"></i>
            </div>
            <ul class="sub-menu bg-[#e8e8e8] pl-4 transition-default !md:pl-0 !md:h-auto !md:bg-white !md:absolute !md:shadow-custom !md:max-h-[50vh] z-3 hidden">
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Poster</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Canvas</a>
                    </div>
                </li>
                <li class="relative menu-item text-lg">
                    <div class="flex justify-between items-center"><a href="#"
                                                                      class="btn-text w-full text-overflow-hidden py-1">Tumbler</a>
                    </div>
                </li>
            </ul>
        </li>
        <li class="relative menu-item text-lg mr-3">
            <div class="flex justify-between items-center"><a href="#"
                                                              class="btn-text w-full text-overflow-hidden py-1">Youth
                &amp; Baby</a></div>
        </li>
    </ul>
</template>

<style scoped>

</style>