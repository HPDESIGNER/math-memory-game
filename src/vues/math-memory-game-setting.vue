<template>
    <div class="row row-fluid p-0 m-0">
        <div class="col-12 text-center col-md-2 p-0 m-0">
            <select v-model="pairNumber" class="w-100 h-100">
                <option value="0" selected>Paarenanzahl</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
            </select>
        </div>
        <div class="col-12 col-md-10 p-0 m-0">
            <button class="btn-dark text-white w-100 h-100" @click="setField">SPIEL STARTEN</button>
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

<style scoped>

</style>