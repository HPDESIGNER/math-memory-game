<template>
    <button class="d-inline-flex border text-center text-white card-size ml-auto mr-auto p-0" :class="content.classNameCard" @click="rotate()"><span><span v-if="!content.ifOpen">math memory game</span>&nbsp;</span></button>
</template>

<script>
    export default {
        name: "math-memory-game-card",
        props: {
            content: {
                type: Object
            }
        },
        methods: {
            rotate: function () {
                if(this.content.classNameCard === "bg-basic"){
                    this.$emit('ifClicked', [this.content.id-1]);
                    this.ifBack = false;
                }
                else {
                    window.alert("Die Karte ist schon geöffnet");
                    this.ifBack = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    button[class="d-inline-flex border text-center text-white card-size ml-auto mr-auto p-0 bg-basic bg-basic"]:hover{
            $shadow: 0 0 35px 10px darkblue inset;
            box-shadow: $shadow;
            -moz-box-shadow: $shadow;
            -webkit-box-shadow:$shadow;
    }
    span {
        transform: rotate(315deg);
    }
</style>