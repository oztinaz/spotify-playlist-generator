<template>
    <div class="body">
        <div class="top">
            <div class="first-line"></div>
            <div class="second-line"></div>
        </div>
        <div class="mid">
            <div class="oguz">
                <Tape/>
                <Window/>
                <Tape/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

// Components
import Tape from '@/components/cassette/body/Tape.vue'
import Window from '@/components/cassette/body/Window.vue'

export default defineComponent({
    components: {
        Tape,
        Window
    }
})
</script>

<style scoped>
.body {
    background: #e47b57;
    border-right: 1px solid #5f6167;
    box-shadow: 1px 1px 1px 1px inset;
    height: 140px;
    margin: 15px 20px;
    padding-top: 2px;
}

.first-line {
    height: 5px;
    margin-left: 2px;
    background: white;
}

.second-line {
    height: 3px;
    margin-left: 2px;
    margin-top: 3px;
    background: white;
}

.mid {
    display: flex;
    align-items: center;
    padding: 5px 40px;
}

.oguz {
    display: flex;
    justify-content: space-between;
    background: #5a5a5a;
    width: 100%;
    border-left: 1px solid #373738;
    border-right: 2px solid #404042;
    border-bottom: 2px solid #373738;
    box-shadow: 1px 2px 2px 1px inset;
}
</style>