<template>
    <div class="cog">
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
        <div class="tooth"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    
})
</script>

<style scoped>
.cog {
    height: 50px;
    width: 50px;
    background: white;
    border: 3px solid #dad6d8;
    border-radius: 50%;
    /* margin: 4px; */
    box-shadow: 1px 1px 1px 1px inset;
}

.tooth {
    height: 6px;
    width: 6px;
    border-radius: 0 0 4px 4px;
    background: #dad6d8;
    box-shadow: 1px 1px;
}

.tooth:nth-child(1) {
    margin-left: 19px;
}

.tooth:nth-child(2) {
    margin-left: 5px;
    border-radius: 0 0 4px 4px;
    transform: rotate(-45deg);
}

.tooth:nth-child(3) {
    margin-left: 33px;
    margin-top: -6px;
    transform: rotate(45deg);
}

.tooth:nth-child(4) {
    margin-top: 6px;
    transform: rotate(-90deg);
}

.tooth:nth-child(5) {
    margin-left: 38px;
    margin-top: -6px;
    transform: rotate(90deg);
}

.tooth:nth-child(6) {
    margin-top: 8px;
    margin-left: 5px;
    transform: rotate(-135deg);
}

.tooth:nth-child(7) {
    margin-top: -5px;
    margin-left: 32px;
    transform: rotate(135deg);
}

.tooth:nth-child(8) {
    margin-top: -1px;
    margin-left: 19px;
    transform: rotate(180deg);
}
</style>