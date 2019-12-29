<template>
    <div>
    <header class="navbar">
        <div class="container nopad headerNav" style="position: relative;">
            <nav class="navbar">
                <div id='cssmenu'>
                    <app-header></app-header>
                </div>
            </nav>
            <app-baskettotal></app-baskettotal>
        </div>
    </header>
    <app-carousel></app-carousel>
    </div>
 </template>

<script>
    import Header from '../header/rendertopmenu.vue';
    import miniBasket from '../minibasket/minibasket.vue';
    import carousel from '../carousel/rendercarousel.vue'
    export default {
        components: {
            'app-header': Header,
            'app-baskettotal': miniBasket,
            'app-carousel': carousel
        },
        data() {
            return {
            } 
        }
    }; 
</script>