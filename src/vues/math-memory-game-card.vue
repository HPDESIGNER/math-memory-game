<template>
    <button class="d-inline-flex border text-center text-white card-size ml-auto mr-auto p-0" :class="content.classNameCard" @click="rotate()"></button>
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
                if(this.content.classNameCard === "bg-back"){
                    this.$emit('ifClicked', [this.content.id-1]);
                }
                else {
                    window.alert("Die Karte ist schon geöffnet");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    button[class="d-inline-flex border text-center text-white card-size ml-auto mr-auto p-0 bg-back bg-back"] {
        margin-top: -5px;
        border-bottom-style: dashed;
        &:hover{
            $shadow: 0 0 35px 10px darkblue inset;
            box-shadow: $shadow;
            -moz-box-shadow: $shadow;
            -webkit-box-shadow:$shadow;
        }
    }
</style>