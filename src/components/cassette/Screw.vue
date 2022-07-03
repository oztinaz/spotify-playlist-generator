<template>
    <div :style="style">
        <div class="screw">
            <i class="bi bi-plus"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
    props: {
        style: {
            type: Object as PropType<{
                padding?: string,
                paddingTop?: string,
                paddingBottom?: string,
                paddingLeft?: string,
                paddingRight?: string
            }>,
            default: null
        }
    }
})
</script>

<style scoped>
.screw {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    background: #3d3b3a;
    border-radius: 50%;
    box-shadow: 0.5px 1px 0.5px 0.5px;
    height: 15px;
    width: 15px;
}

.bi-plus {
    font-size: 16px;
}
</style>