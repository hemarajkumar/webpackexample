<template>
  <section>
    <div class="col-12 col-sm-12 nopad carousel">
      <div id="vue-carousel" class="owl-carousel owl-theme js-homePageCarousel">
        <template v-for="lists in carouselobj">
          <template v-for="item in lists">
            <div class="item">
              <picture class="owl-item__picture">
                <template v-for="picture in item.list">
                  <source
                    v-bind:key="picture.imagetype"
                    v-if="picture.imagetype == 'desktop'"
                    v-bind:srcset="picture.path"
                    media="(min-width: 900px)"
                  />
                  <source
                    v-bind:key="picture.imagetype"
                    v-if="picture.imagetype == 'tablet'"
                    srcset="dist/images/carousel/image1-tablet.png"
                    media="(min-width: 641px) and (max-width: 899px)"
                  />
                  <source
                    v-bind:key="picture.imagetype"
                    v-if="picture.imagetype == 'mobile'"
                    srcset="dist/images/carousel/image1-mobile.png"
                    mmedia="(max-width: 640px)"
                  />
                </template>
                <template v-for="img in item.list">
                  <img v-if="img.imagetype == 'desktop'" v-bind:src="img.path" />
                </template>
              </picture>
              <h4 class="owl-item__title">{{ item.Title }}</h4>
            </div>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import CarouselFunction from "./loadcarousel";
import { carouselObject } from "../store/store";
export default {
  data() {
    return {
      carouselobj: []
    };
  },
  mounted() {
    // this.carouselobj = this.$store.state[0].data.carousel;
    this.carouselobj = carouselObject.state[0].data;
    setTimeout(function() {
      CarouselFunction.loadCarousel();
    }, 500);
  }
};
</script>