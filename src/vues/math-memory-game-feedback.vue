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

<style scoped>
 .feedback {
     width: 15%;
     min-width: 115px;
     box-shadow: 0px 0px 2px 1px blue;
     border-radius: 6px;
     margin-top: -2px;
     font-size: large;
 }
</style>