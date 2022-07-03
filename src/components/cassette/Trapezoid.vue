<template>
    <div class="trapezoid">
        <div class="head">
            <Hole/>
            <Hole/>
        </div>
        <div class="footer">
            <Screw/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

// Components
import Hole from '@/components/cassette/Hole.vue'
import Screw from '@/components/cassette/Screw.vue'

export default defineComponent({
    components: {
        Hole,
        Screw
    }
})
</script>

<style scoped>
.trapezoid {
    background: #5f6167;
    border-radius: 0 0 8px 8px;
    box-shadow: 1px 2px 1px 1px;

    height: 50px;
    width: 200px;

    transform: perspective(10px) rotateX(-1deg);
}

.head {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    padding-top: 5px;
}

.footer {
    display: flex;
    justify-content: center;
    padding-top: 5px;
}
</style>