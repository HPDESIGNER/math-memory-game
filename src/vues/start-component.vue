<template>
    <div class="container">
       <demo-component v-for="(groupListIndex, index) in groupList" :key="index" :content="groupListIndex"></demo-component>
    </div>
</template>
<script>
    import DemoComponent from "./demo-component";
    export default {
        name: 'start-component',
        components: {DemoComponent},
        data() {
            return {
                groupList: [
                    {id:1, groupListEntry1:"Vue Properties 1 1", groupListEntry2: "Vue Properties 1 2", groupListEntry3: "Vue Properties 1 3"},
                    {id:2, groupListEntry1:"Vue Properties 2 1", groupListEntry2: "Vue Properties 2 2", groupListEntry3: "Vue Properties 2 3"},
                    {id:3, groupListEntry1:"Vue Properties 3 1", groupListEntry2: "Vue Properties 3 2", groupListEntry3: "Vue Properties 3 3"},
                    {id:4, groupListEntry1:"Vue Properties 4 1", groupListEntry2: "Vue Properties 4 2", groupListEntry3: "Vue Properties 4 3"},
                    {id:5, groupListEntry1:"Vue Properties 5 1", groupListEntry2: "Vue Properties 5 2", groupListEntry3: "Vue Properties 5 3"},
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    @import '../../node_modules/bootstrap/scss/bootstrap';
</style>