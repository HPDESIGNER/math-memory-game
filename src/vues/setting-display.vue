<template>
    <div class="row row-fluid p-0 m-0 bg-info">
        <div class="col-12 col-md-2 p-0 m-0">
            <select v-model="pairNumber" class="w-100 h-100">
                <option value="0" selected>Paarenanzahl</option>
                <option value="16">8</option>
                <option value="24">12</option>
                <option value="32">16</option>
                <option value="40">20</option>
                <option value="48">24</option>
                <option value="56">28</option>
                <option value="64">32</option>
            </select>
        </div>
        <div class="col-12 col-md-10 p-0 m-0">
            <button class="btn-dark text-white w-100 h-100" @click="setField">SPIEL STARTEN</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "setting-display",
        data() {
            return {
                pairNumber: 0,
            }
        },
        methods: {
            setField: function () {
                console.log(this.pairNumber);
                this.$emit('setPairNumber',[this.pairNumber]);
            }
        }
    }
</script>

<style scoped>

</style>