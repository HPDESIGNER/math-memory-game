<template>
    <div class="row mb-1">
           <div class="col-12">
              <div class="ml-auto feedback text-center text-white bg-basic mb-1">{{pairNumberFound}} aus {{pairNumber}}</div>
           </div>
    </div>
</template>

<script>
    export default {
        name: "math-memory-game-feedback",
        props: {
            click: {
                type: Number
            },
            pairNumber: {
                type: Number
            },
            pairNumberFound: {
                type: Number
            }
        }
    }
</script>

<style lang ="scss" scoped>
    @import "../SASS/minWidth";
 .feedback {
     width: 15%;
     min-width: $min-width;
     box-shadow: 0 0 2px 1px blue;
     border-radius: 6px;
     margin-top: -2px;
     font-size: large;
 }
</style>