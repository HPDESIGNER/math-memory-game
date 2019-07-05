<template>
    <div class="container p-0">
        <div class="row row-fluid p-0 m-0">
            <div class="col-12 text-center p-0 m-0">
                <math-memory-game-card v-for="(groupListIndex, index) in classNameList" :key="index"
                                       :content="groupListIndex" @ifClicked="clicked($event)" :class="classNameList[index].classNameCard"></math-memory-game-card>
            </div>
        </div>
    </div>
</template>
<script>

    import MathMemoryGameCard from "./math-memory-game-card";
    export default {
        name: 'control-panel',
        components: {MathMemoryGameCard},
        data() {
            return {
                classNameList: [
                    {id: 1, classNameCard: "bg-basic", newColor: "bg-gradient-1",  pair: false},
                    {id: 2, classNameCard: "bg-basic", newColor: "bg-gradient-1",  pair: false},
                    {id: 3, classNameCard: "bg-basic", newColor: "bg-gradient-2",  pair: false},
                    {id: 4, classNameCard: "bg-basic", newColor: "bg-gradient-2",  pair: false},
                    {id: 5, classNameCard: "bg-basic", newColor: "bg-gradient-3",  pair: false},
                    {id: 6, classNameCard: "bg-basic", newColor: "bg-gradient-3",  pair: false},
                    {id: 7, classNameCard: "bg-basic", newColor: "bg-gradient-4",  pair: false},
                    {id: 8, classNameCard: "bg-basic", newColor: "bg-gradient-4",  pair: false},
                    {id: 9, classNameCard: "bg-basic", newColor: "bg-gradient-5",  pair: false},
                    {id: 10, classNameCard: "bg-basic", newColor: "bg-gradient-5",  pair: false},
                    {id: 11, classNameCard: "bg-basic", newColor: "bg-gradient-6",  pair: false},
                    {id: 12, classNameCard: "bg-basic", newColor: "bg-gradient-6",  pair: false},
                    {id: 13, classNameCard: "bg-basic", newColor: "bg-gradient-7",  pair: false},
                    {id: 14, classNameCard: "bg-basic", newColor: "bg-gradient-7",  pair: false},
                    {id: 15, classNameCard: "bg-basic", newColor: "bg-gradient-8",  pair: false},
                    {id: 16, classNameCard: "bg-basic", newColor: "bg-gradient-8",  pair: false},
                    {id: 17, classNameCard: "bg-basic", newColor: "bg-gradient-9",  pair: false},
                    {id: 18, classNameCard: "bg-basic", newColor: "bg-gradient-9",  pair: false},
                    {id: 19, classNameCard: "bg-basic", newColor: "bg-gradient-10",  pair: false},
                    {id: 20, classNameCard: "bg-basic", newColor: "bg-gradient-10",  pair: false},
                    {id: 21, classNameCard: "bg-basic", newColor: "bg-gradient-11",  pair: false},
                    {id: 22, classNameCard: "bg-basic", newColor: "bg-gradient-11",  pair: false},
                    {id: 23, classNameCard: "bg-basic", newColor: "bg-gradient-12",  pair: false},
                    {id: 24, classNameCard: "bg-basic", newColor: "bg-gradient-12",  pair: false},
                    {id: 25, classNameCard: "bg-basic", newColor: "bg-gradient-13",  pair: false},
                    {id: 26, classNameCard: "bg-basic", newColor: "bg-gradient-13",  pair: false},
                    {id: 27, classNameCard: "bg-basic", newColor: "bg-gradient-14",  pair: false},
                    {id: 28, classNameCard: "bg-basic", newColor: "bg-gradient-14",  pair: false},
                    {id: 29, classNameCard: "bg-basic", newColor: "bg-gradient-15",  pair: false},
                    {id: 30, classNameCard: "bg-basic", newColor: "bg-gradient-15",  pair: false},
                    {id: 31, classNameCard: "bg-basic", newColor: "bg-gradient-16",  pair: false},
                    {id: 32, classNameCard: "bg-basic", newColor: "bg-gradient-16",  pair: false},
                    {id: 33, classNameCard: "bg-basic", newColor: "bg-gradient-17",  pair: false},
                    {id: 34, classNameCard: "bg-basic", newColor: "bg-gradient-17",  pair: false},
                    {id: 35, classNameCard: "bg-basic", newColor: "bg-gradient-18",  pair: false},
                    {id: 36, classNameCard: "bg-basic", newColor: "bg-gradient-18",  pair: false},
                    {id: 37, classNameCard: "bg-basic", newColor: "bg-gradient-19",  pair: false},
                    {id: 38, classNameCard: "bg-basic", newColor: "bg-gradient-19",  pair: false},
                    {id: 39, classNameCard: "bg-basic", newColor: "bg-gradient-20",  pair: false},
                    {id: 40, classNameCard: "bg-basic", newColor: "bg-gradient-20",  pair: false},
                    {id: 41, classNameCard: "bg-basic", newColor: "bg-gradient-21",  pair: false},
                    {id: 42, classNameCard: "bg-basic", newColor: "bg-gradient-21",  pair: false},
                    {id: 43, classNameCard: "bg-basic", newColor: "bg-gradient-22",  pair: false},
                    {id: 44, classNameCard: "bg-basic", newColor: "bg-gradient-22",  pair: false},
                    {id: 45, classNameCard: "bg-basic", newColor: "bg-gradient-23",  pair: false},
                    {id: 46, classNameCard: "bg-basic", newColor: "bg-gradient-23",  pair: false},
                    {id: 47, classNameCard: "bg-basic", newColor: "bg-gradient-24",  pair: false},
                    {id: 48, classNameCard: "bg-basic", newColor: "bg-gradient-24",  pair: false},
                    {id: 49, classNameCard: "bg-basic", newColor: "bg-gradient-25",  pair: false},
                    {id: 50, classNameCard: "bg-basic", newColor: "bg-gradient-25",  pair: false},
                    {id: 51, classNameCard: "bg-basic", newColor: "bg-gradient-26",  pair: false},
                    {id: 52, classNameCard: "bg-basic", newColor: "bg-gradient-26",  pair: false},
                    {id: 53, classNameCard: "bg-basic", newColor: "bg-gradient-27",  pair: false},
                    {id: 54, classNameCard: "bg-basic", newColor: "bg-gradient-27",  pair: false},
                    {id: 55, classNameCard: "bg-basic", newColor: "bg-gradient-28",  pair: false},
                    {id: 56, classNameCard: "bg-basic", newColor: "bg-gradient-28",  pair: false},
                    {id: 57, classNameCard: "bg-basic", newColor: "bg-gradient-29",  pair: false},
                    {id: 58, classNameCard: "bg-basic", newColor: "bg-gradient-29",  pair: false},
                    {id: 59, classNameCard: "bg-basic", newColor: "bg-gradient-30",  pair: false},
                    {id: 60, classNameCard: "bg-basic", newColor: "bg-gradient-30",  pair: false},
                    {id: 61, classNameCard: "bg-basic", newColor: "bg-gradient-31",  pair: false},
                    {id: 62, classNameCard: "bg-basic", newColor: "bg-gradient-31",  pair: false},
                    {id: 63, classNameCard: "bg-basic", newColor: "bg-gradient-32",  pair: false},
                    {id: 64, classNameCard: "bg-basic", newColor: "bg-gradient-32",  pair: false},
                ]
            }
        },
        methods: {
            clicked: function (card) {
                this.classNameList[card[0]].classNameCard = this.classNameList[card[0]].newColor;
                this.classNameList[card[0]].back = false;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../node_modules/bootstrap/scss/bootstrap";
    @import "../SASS/size";
    @import "../SASS/cardColors";
</style>