<template>
    <div class="tape">
        <Cog/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

// Components
import Cog from '@/components/cassette/body/Cog.vue'

export default defineComponent({
    components: {
        Cog
    }
})
</script>

<style scoped>
.tape {
    margin: 5px;
    border: 25px solid #494949;
    border-radius: 50%;
}
</style>