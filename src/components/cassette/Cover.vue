<template>
    <div class="cover">
        <div class="holder">
        </div>
        <div class="image">
            <img height="442" width="300" :src="src" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { Playlist } from '@/models/playlist'
import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
    props: {
        playlist: {
            type: Object as PropType<Playlist>,
            required: true
        }
    },
    computed: {
        src(): string | null {
            if (this.playlist !== null) {
                return this.playlist.getImages()[0].getUrl()
            }
            return null
        }
    }
})
</script>

<style scoped>
.cover {
    height: 350px;
    width: 300px;
    perspective: 600px;
    z-index: -1;
    margin-left: -30px;
}

.holder {
    margin-left: -2px;
    background: rgba(218, 218, 218, 0.685);
    height: 390px;
    width: 300px;
    transform-style: preserve-3d;
    transform: rotateY(-5deg);
    box-shadow: 2px 2px 15px 2px;
}

.image {
    margin-top: -413px;
    margin-left: 31px;
    height: 440px;
    width: 300px;
    transform-style: preserve-3d;
    transform: rotateY(25deg);
    box-shadow: 2px 2px 15px 0px;
}
</style>