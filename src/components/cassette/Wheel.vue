<template>
    <div class="wheel">
        <div class="inner-wheel">
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
            <div class="cog"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({

})
</script>

<style scoped>
.wheel {
    background: white;
    border: 1px solid rgb(122, 120, 120);
    border-radius: 50%;
    height: 80px;
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.inner-wheel {
    border: 1px solid rgb(122, 120, 120);
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.cog {
    border-radius: 5px 5px 2px 2px;
    position: absolute;
    background: rgb(202, 202, 202);
    width: 4px;
    height: 6px;
}

.inner-wheel .cog:nth-child(1) {
    transform: rotate(180deg);
    margin-left: 23px;
    margin-top: -1px;
}

.inner-wheel .cog:nth-child(2) {
    transform: rotate(90deg);
    margin-top: 22px;
}

.inner-wheel .cog:nth-child(3) {
    margin-top: 44px;
    margin-left: 23px;
    margin-top: 45px;
}

.inner-wheel .cog:nth-child(4) {
    transform: rotate(270deg);
    margin-top: 22px;
    margin-left: 46px;
}

.inner-wheel .cog:nth-child(5) {
    transform: rotate(225deg);
    margin-top: 7px;
    margin-left: 40px;
}

.inner-wheel .cog:nth-child(6) {
    transform: rotate(310deg);
    margin-top: 37px;
    margin-left: 40px;
}

.inner-wheel .cog:nth-child(7) {
    transform: rotate(45deg);
    margin-top: 37px;
    margin-left: 6px;
}

.inner-wheel .cog:nth-child(8) {
    transform: rotate(125deg);
    margin-top: 8px;
    margin-left: 5px;
}
</style>