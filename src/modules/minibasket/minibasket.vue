<template>
    <div class="mini-basket" style="">
        <a id="load-minibasket-popover" class="oi oi-cart mini-basket__trolly js-mini-cart" data-container="body" data-toggle="popover" data-placement="bottom" data-content="&nbsp;"></a>
        <span class="mini-basket__circle">{{ total }}</span>
    </div>
</template>

<script>
    require ('./mini-cart-popover');
    export default {
        data () {
            return {
                total: 0
            }
        }
    }; 
</script>