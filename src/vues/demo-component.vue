<template>
    <div>
        {{content.groupListEntry1}} ||
        {{content.groupListEntry2}} ||
        {{content.groupListEntry3}}
    </div>
</template>

<script>
    export default {
        name: "demo-component",
        props: {
            content: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>