<template>
    <div class="trapezoid">
        <div class="side">
            <div class="empty-circle"></div>
            <div class="empty-box"></div>
        </div>
        <div class="side">
            <div class="empty-box"></div>
            <div class="empty-circle"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    
})
</script>

<style scoped>
.trapezoid {
    border: 2px solid rgba(194, 194, 194, 0.842);
    border-bottom: none;
    height: 50px;
    width: 200px;
    transform: perspective(20px) rotateX(1deg);
    margin: 1px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 28px;
}

.side {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    margin: 0 0 7px 0;
}

.empty-circle {
    border: 1px solid rgba(82, 81, 81, 0.842);
    border-radius: 50%;
    height: 15px;
    width: 15px;
}

.empty-box {
    border: 1px solid rgba(97, 97, 97, 0.842);
    border-radius: 4px;
    height: 20px;
    width: 20px;
}
</style>