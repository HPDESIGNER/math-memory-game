<template>
    <div class="row w-100 p-0 m-0">
        <div class="col-12 text-right p-0 m-0">
            <div class="ml-auto pair-number text-right text-white bg-basic pt-1 pr-1">
                <select v-model="pairNumber" class="h-100 text-white bg-basic float-left p-0 mt-1">
                    <option value="0" selected>0</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="28">28</option>
                    <option value="32">32</option>
                </select>
                Paaren
            </div>
        </div>
        <button class="text-white w-100 h-100 bg-basic mt-1" @click="setField">SPIEL STARTEN</button>
    </div>
</template>

<script>
    export default {
        name: "math-memory-game-setting",
        data() {
            return {
                pairNumber: 0,
            }
        },
        methods: {
            setField: function () {
                this.$emit('setPairNumber', [this.pairNumber]);
            }
        }
    }
</script>

<style lang="scss" scoped>
    button:hover, select:hover {
        $shadow: 0 0 30px 5px darkblue inset;
        box-shadow: $shadow;
        -moz-box-shadow: $shadow;
        -webkit-box-shadow: $shadow;
    }

    .pair-number {
        width: 15%;
        min-width: 128px;
        box-shadow: 0px 0px 2px 1px blue;
        border-radius: 6px;
        margin-top: -5px;
        font-size: large;
    }

    select {
        border-radius: 0 6px 0 6px;
        width: 60px;

        option {
            background: #bbb;
            border-top: 1px solid #fff;
            border-bottom-style: dashed;
        }
    }
</style>