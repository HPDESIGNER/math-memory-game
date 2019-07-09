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
                click: 0,
                classNameList: [
                    {id: 1, classNameCard: "bg-basic", newColor: "bg-gradient-1",  ifPair: false, ifOpen: false},
                    {id: 2, classNameCard: "bg-basic", newColor: "bg-gradient-1",  ifPair: false, ifOpen: false},
                    {id: 3, classNameCard: "bg-basic", newColor: "bg-gradient-2",  ifPair: false, ifOpen: false},
                    {id: 4, classNameCard: "bg-basic", newColor: "bg-gradient-2",  ifPair: false, ifOpen: false},
                    {id: 5, classNameCard: "bg-basic", newColor: "bg-gradient-3",  ifPair: false, ifOpen: false},
                    {id: 6, classNameCard: "bg-basic", newColor: "bg-gradient-3",  ifPair: false, ifOpen: false},
                    {id: 7, classNameCard: "bg-basic", newColor: "bg-gradient-4",  ifPair: false, ifOpen: false},
                    {id: 8, classNameCard: "bg-basic", newColor: "bg-gradient-4",  ifPair: false, ifOpen: false},
                    {id: 9, classNameCard: "bg-basic", newColor: "bg-gradient-5",  ifPair: false, ifOpen: false},
                    {id: 10, classNameCard: "bg-basic", newColor: "bg-gradient-5",  ifPair: false, ifOpen: false},
                    {id: 11, classNameCard: "bg-basic", newColor: "bg-gradient-6",  ifPair: false, ifOpen: false},
                    {id: 12, classNameCard: "bg-basic", newColor: "bg-gradient-6",  ifPair: false, ifOpen: false},
                    {id: 13, classNameCard: "bg-basic", newColor: "bg-gradient-7",  ifPair: false, ifOpen: false},
                    {id: 14, classNameCard: "bg-basic", newColor: "bg-gradient-7",  ifPair: false, ifOpen: false},
                    {id: 15, classNameCard: "bg-basic", newColor: "bg-gradient-8",  ifPair: false, ifOpen: false},
                    {id: 16, classNameCard: "bg-basic", newColor: "bg-gradient-8",  ifPair: false, ifOpen: false},
                    {id: 17, classNameCard: "bg-basic", newColor: "bg-gradient-9",  ifPair: false, ifOpen: false},
                    {id: 18, classNameCard: "bg-basic", newColor: "bg-gradient-9",  ifPair: false, ifOpen: false},
                    {id: 19, classNameCard: "bg-basic", newColor: "bg-gradient-10",  ifPair: false, ifOpen: false},
                    {id: 20, classNameCard: "bg-basic", newColor: "bg-gradient-10",  ifPair: false, ifOpen: false},
                    {id: 21, classNameCard: "bg-basic", newColor: "bg-gradient-11",  ifPair: false, ifOpen: false},
                    {id: 22, classNameCard: "bg-basic", newColor: "bg-gradient-11",  ifPair: false, ifOpen: false},
                    {id: 23, classNameCard: "bg-basic", newColor: "bg-gradient-12",  ifPair: false, ifOpen: false},
                    {id: 24, classNameCard: "bg-basic", newColor: "bg-gradient-12",  ifPair: false, ifOpen: false},
                    {id: 25, classNameCard: "bg-basic", newColor: "bg-gradient-13",  ifPair: false, ifOpen: false},
                    {id: 26, classNameCard: "bg-basic", newColor: "bg-gradient-13",  ifPair: false, ifOpen: false},
                    {id: 27, classNameCard: "bg-basic", newColor: "bg-gradient-14",  ifPair: false, ifOpen: false},
                    {id: 28, classNameCard: "bg-basic", newColor: "bg-gradient-14",  ifPair: false, ifOpen: false},
                    {id: 29, classNameCard: "bg-basic", newColor: "bg-gradient-15",  ifPair: false, ifOpen: false},
                    {id: 30, classNameCard: "bg-basic", newColor: "bg-gradient-15",  ifPair: false, ifOpen: false},
                    {id: 31, classNameCard: "bg-basic", newColor: "bg-gradient-16",  ifPair: false, ifOpen: false},
                    {id: 32, classNameCard: "bg-basic", newColor: "bg-gradient-16",  ifPair: false, ifOpen: false},
                    {id: 33, classNameCard: "bg-basic", newColor: "bg-gradient-17",  ifPair: false, ifOpen: false},
                    {id: 34, classNameCard: "bg-basic", newColor: "bg-gradient-17",  ifPair: false, ifOpen: false},
                    {id: 35, classNameCard: "bg-basic", newColor: "bg-gradient-18",  ifPair: false, ifOpen: false},
                    {id: 36, classNameCard: "bg-basic", newColor: "bg-gradient-18",  ifPair: false, ifOpen: false},
                    {id: 37, classNameCard: "bg-basic", newColor: "bg-gradient-19",  ifPair: false, ifOpen: false},
                    {id: 38, classNameCard: "bg-basic", newColor: "bg-gradient-19",  ifPair: false, ifOpen: false},
                    {id: 39, classNameCard: "bg-basic", newColor: "bg-gradient-20",  ifPair: false, ifOpen: false},
                    {id: 40, classNameCard: "bg-basic", newColor: "bg-gradient-20",  ifPair: false, ifOpen: false},
                    {id: 41, classNameCard: "bg-basic", newColor: "bg-gradient-21",  ifPair: false, ifOpen: false},
                    {id: 42, classNameCard: "bg-basic", newColor: "bg-gradient-21",  ifPair: false, ifOpen: false},
                    {id: 43, classNameCard: "bg-basic", newColor: "bg-gradient-22",  ifPair: false, ifOpen: false},
                    {id: 44, classNameCard: "bg-basic", newColor: "bg-gradient-22",  ifPair: false, ifOpen: false},
                    {id: 45, classNameCard: "bg-basic", newColor: "bg-gradient-23",  ifPair: false, ifOpen: false},
                    {id: 46, classNameCard: "bg-basic", newColor: "bg-gradient-23",  ifPair: false, ifOpen: false},
                    {id: 47, classNameCard: "bg-basic", newColor: "bg-gradient-24",  ifPair: false, ifOpen: false},
                    {id: 48, classNameCard: "bg-basic", newColor: "bg-gradient-24",  ifPair: false, ifOpen: false},
                    {id: 49, classNameCard: "bg-basic", newColor: "bg-gradient-25",  ifPair: false, ifOpen: false},
                    {id: 50, classNameCard: "bg-basic", newColor: "bg-gradient-25",  ifPair: false, ifOpen: false},
                    {id: 51, classNameCard: "bg-basic", newColor: "bg-gradient-26",  ifPair: false, ifOpen: false},
                    {id: 52, classNameCard: "bg-basic", newColor: "bg-gradient-26",  ifPair: false, ifOpen: false},
                    {id: 53, classNameCard: "bg-basic", newColor: "bg-gradient-27",  ifPair: false, ifOpen: false},
                    {id: 54, classNameCard: "bg-basic", newColor: "bg-gradient-27",  ifPair: false, ifOpen: false},
                    {id: 55, classNameCard: "bg-basic", newColor: "bg-gradient-28",  ifPair: false, ifOpen: false},
                    {id: 56, classNameCard: "bg-basic", newColor: "bg-gradient-28",  ifPair: false, ifOpen: false},
                    {id: 57, classNameCard: "bg-basic", newColor: "bg-gradient-29",  ifPair: false, ifOpen: false},
                    {id: 58, classNameCard: "bg-basic", newColor: "bg-gradient-29",  ifPair: false, ifOpen: false},
                    {id: 59, classNameCard: "bg-basic", newColor: "bg-gradient-30",  ifPair: false, ifOpen: false},
                    {id: 60, classNameCard: "bg-basic", newColor: "bg-gradient-30",  ifPair: false, ifOpen: false},
                    {id: 61, classNameCard: "bg-basic", newColor: "bg-gradient-31",  ifPair: false, ifOpen: false},
                    {id: 62, classNameCard: "bg-basic", newColor: "bg-gradient-31",  ifPair: false, ifOpen: false},
                    {id: 63, classNameCard: "bg-basic", newColor: "bg-gradient-32",  ifPair: false, ifOpen: false},
                    {id: 64, classNameCard: "bg-basic", newColor: "bg-gradient-32",  ifPair: false, ifOpen: false},
                ]
            }
        },
        methods: {
            IfPair: function(number) {
                for(let i=0; i<64; i++){
                    if(this.classNameList[number].classNameCard === this.classNameList[i].classNameCard && this.classNameList[number].classNameCard !== "bg-basic" && this.classNameList[number].id !== this.classNameList[i].id ){
                        this.classNameList[number].ifPair = true;
                        this.classNameList[i].ifPair = true;
                    }
                    else {
                        setTimeout(this.cardsOff, 600);
                    }
                }
            },
            cardsOff: function(){
                for(let i=0; i<64; i++){
                    if(this.classNameList[i].ifPair !== true){
                        this.classNameList[i].classNameCard = "bg-basic";
                        this.classNameList[i].ifOpen = false;
                    }
                }
            },
            clicked: function (card) {
                if(this.classNameList[card[0]].classNameCard === "bg-basic"){
                    this.click ++;
                    this.classNameList[card[0]].ifOpen = true;
                    console.log(this.click);
                }
                this.classNameList[card[0]].classNameCard = this.classNameList[card[0]].newColor;
                if(this.click%2 === 0 ){
                   this.IfPair(card[0]);
                }


            }
        }
    }
</script>

<style lang="scss">
    @import "../../node_modules/bootstrap/scss/bootstrap";
    @import "../SASS/size";
    @import "../SASS/cardColors";
</style>