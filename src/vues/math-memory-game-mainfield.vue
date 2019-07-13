<template>
    <div class="container p-0 text-center pl-0 pr-0">
        <button class="w-100 text-center bg-basic text-white position-absolute fixed-top" @click="offAlert" v-if="ifAlert">{{alert}}</button>
        <math-memory-game-setting @setPairNumber="setField($event)" v-if="settingVisibility"></math-memory-game-setting>
        <math-memory-game-feedback :click="click" :pairNumber="pairNumber" :pairNumberFound="pairNumberFound" v-if="feedbackVisibility"></math-memory-game-feedback>
        <math-memory-game-card :class="classNameList[index].classNameCard" :content="groupListIndex"
                                       :key="index" @ifClicked="clicked($event)"
                                       v-for="(groupListIndex, index) in classNameList"
                                       v-if="classNameList[index].ifVisible"></math-memory-game-card>
        <button class="text-white w-100 h-100 bg-basic" @click="setFieldNeu" v-if="settingNeuVisibility">NEUES SPIEL</button>
    </div>
</template>

<script>
    import MathMemoryGameCard from "./math-memory-game-card";
    import MathMemoryGameSetting from "./math-memory-game-setting";
    import MathMemoryGameFeedback from "./math-memory-game-feedback";

    export default {
        name: 'math-memory-game-mainfield',
        components: {MathMemoryGameFeedback, MathMemoryGameSetting, MathMemoryGameCard},
        data() {
            return {
                click: 0,
                pairNumber: 0,
                pairNumberFound: 0,
                settingVisibility: true,
                alert: "",
                feedbackVisibility: false,
                ifAlert: false,
                settingNeuVisibility: false,
                temp: 0,
                classNameList: [
                    {
                        id: 1,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-1",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 2,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-1",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 3,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-2",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 4,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-2",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 5,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-3",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 6,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-3",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 7,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-4",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 8,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-4",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 9,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-5",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 10,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-5",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 11,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-6",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 12,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-6",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 13,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-7",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 14,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-7",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 15,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-8",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 16,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-8",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 17,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-9",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 18,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-9",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 19,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-10",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 20,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-10",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 21,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-11",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 22,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-11",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 23,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-12",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 24,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-12",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 25,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-13",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 26,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-13",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 27,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-14",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 28,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-14",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 29,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-15",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 30,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-15",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 31,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-16",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 32,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-16",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 33,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-17",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 34,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-17",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 35,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-18",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 36,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-18",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 37,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-19",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 38,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-19",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 39,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-20",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 40,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-20",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 41,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-21",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 42,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-21",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 43,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-22",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 44,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-22",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 45,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-23",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 46,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-23",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 47,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-24",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 48,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-24",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 49,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-25",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 50,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-25",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 51,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-26",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 52,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-26",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 53,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-27",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 54,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-27",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 55,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-28",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 56,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-28",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 57,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-29",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 58,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-29",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 59,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-30",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 60,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-30",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 61,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-31",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 62,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-31",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 63,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-32",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                    {
                        id: 64,
                        classNameCard: "bg-back",
                        newColor: "bg-gradient-32",
                        ifPair: false,
                        ifVisible: false,
                        ifOpen: false
                    },
                ]
            }
        },
        methods: {
            setMix: function(number) {
                let l = number*2, n;
                while (--l > 0) {
                    n = Math.floor(Math.random() * (l + 1));
                    this.temp = this.classNameList[n].newColor;
                    this.classNameList[n].newColor = this.classNameList[l].newColor;
                    this.classNameList[l].newColor = this.temp;
                }
            },
            setReset: function () {
                this.click = 0;
                this.pairNumber = 0;
                this.pairNumberFound = 0;
                this.alert = "";
                this.settingVisibility = true;
                this.feedbackVisibility = false;
                for (let i = 0; i < 64; i++) {
                    this.classNameList[i].classNameCard = "bg-back";
                    this.classNameList[i].ifVisible = false;
                    this.classNameList[i].ifOpen = false;
                }
            },
            ifAll: function (cardNumber) {
                let opened = 0;
                for (let i = 0; i < 64; i++) {
                    if (this.classNameList[i].ifOpen) {
                        opened++;
                    }
                }
                return opened >= cardNumber;

            },
            setField: function (number) {
                this.setReset();
                if(number[0]!==0){
                    for (let i = 0; i < 64; i++) {
                        this.setReset();
                    }
                    for (let i = 0; i < number[0] * 2; i++) {
                        this.classNameList[i].ifVisible = true;
                    }
                    this.pairNumber = number[0];
                    this.feedbackVisibility = true;
                    this.settingVisibility = false;
                    this.setMix(number[0]);
                }
                else {
                    this.ifAlert = true;
                    this.alert = "!! Wählen Sie bitte ihre Paarenanzahl aus !!";
                }
            },
            setFieldNeu: function () {
                this.settingVisibility = true;
                this.settingNeuVisibility = false;
                this.setReset();
            },
            IfPair: function (number) {
                for (let i = 0; i < 64; i++) {
                    if (this.classNameList[number].classNameCard === this.classNameList[i].classNameCard && this.classNameList[number].classNameCard !== "bg-back" && this.classNameList[number].id !== this.classNameList[i].id) {
                        this.classNameList[number].ifPair = true;
                        this.classNameList[i].ifPair = true;
                        this.pairNumberFound++;
                    } else {
                        setTimeout(this.cardsOff, 600);
                    }
                }
            },
            cardsOff: function () {
                for (let i = 0; i < 64; i++) {
                    if (this.classNameList[i].ifPair !== true) {
                        this.classNameList[i].classNameCard = "bg-back";
                        this.classNameList[i].ifOpen = false;
                    }
                }
            },
            clicked: function (card) {
                if (this.classNameList[card[0]].classNameCard === "bg-back") {
                    this.click++;
                    this.classNameList[card[0]].ifOpen = true;
                }
                this.classNameList[card[0]].classNameCard = this.classNameList[card[0]].newColor;
                if (this.click % 2 === 0) {
                    this.IfPair(card[0]);
                    if (this.ifAll(this.pairNumber * 2)) {
                       this.settingNeuVisibility = true;
                    }
                }
            },
            offAlert: function () {
                this.ifAlert = false;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../node_modules/bootstrap/scss/bootstrap";
    @import "../SASS/size";
    @import "../SASS/cardColors";

   button, button:focus, select, select:focus {
        outline: none;
        border: none;
       .w-100 {
           min-width: 100%;
       }
    }
</style>