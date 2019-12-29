<template>
    <div>
        <div class="row">
            <div class="plp-facets">
                <div>
                    <div class="col-12">
                        <div class="plp-facets__types">
                            <h3 class="plp-facets--title">{{ facetTitle }}</h3>
                            <div class="plp-facets--option">
                                <input id="11" type="checkbox" name="color" data-category="cat02" value="blue">
                                <label for="11" class="plp-facets--option-label">blue</label>
                                <br>
                            </div>
                            <div class="plp-facets--option">
                                <input id="12" type="checkbox" name="color" data-category="cat02" value="red">
                                <label for="12" class="plp-facets--option-label">red</label>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                facetTitle: 'Mens Wear'
            }
        }
    }; 
</script>