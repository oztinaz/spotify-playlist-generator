<template>
    <div class="modal fade" id="recommendationsModal" tabindex="-1" aria-labelledby="recommendationsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="recommendationsModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div
                        v-for="recommendation in recommendations"
                        :key="recommendation.getId()"
                    >
                        <Recommendation :recommendation="recommendation" @click="addRecommendation(recommendation)"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import Recommendation from '@/components/recommendation/Main.vue'

import { Playlist } from '@/models/playlist'
import { Track } from '@/models/track'

export default defineComponent({
    components: {
        Recommendation
    },
    props: {
        recommendations: {
            type: Object as PropType<Track>,
            required: true
        },
        playlist: {
            type: Object as PropType<Playlist>,
            required: true
        }
    },
    methods: {
        addRecommendation(recommendation: Track): void {
            const tracks: Array<Track> = this.playlist.getTracks()
            tracks.push(recommendation)
            this.playlist.setTracks(tracks)
        }
    }
})
</script>

<style scoped>
.modal-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>