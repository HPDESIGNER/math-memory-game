<template>
    <div class="row row-fluid p-0 m-0">
        <div class="col-12 text-center col-md-10 p-0 m-0">
            <select v-model="pairNumber" class="w-100 h-100 bg-basic text-white">
                <option value="0" selected ><span>Paarenanzahl</span></option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
            </select>
        </div>
        <div class="col-12 col-md-2 p-0 m-0">
            <button class="btn-dark text-white w-100 h-100 bg-basic" @click="setField">SPIEL STARTEN</button>
        </div>
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
    button:hover{
        $shadow: 0 0 30px 5px darkblue inset;
        box-shadow: $shadow;
        -moz-box-shadow: $shadow;
        -webkit-box-shadow:$shadow;
    }
    select {
        option[value="0"], option[value="8"], option[value="12"], option[value="16"], option[value="20"]{
            color: #fff;
        }
    }

</style>