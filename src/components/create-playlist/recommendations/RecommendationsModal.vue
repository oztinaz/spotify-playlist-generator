<template>
    <div class="modal fade" id="recommendationsModal" tabindex="-1" aria-labelledby="recommendationsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="recommendationsModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Recommendation
                        v-for="recommendation in recommendations"
                        :key="recommendation.getId()"
                        :recommendation="recommendation"
                        @click="addRecommendation(recommendation)"
                    />
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
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'

// Components
import Recommendation from '@/components/recommendation/Main.vue'

// Models
import { Track } from '@/models/track'

export default defineComponent({
    components: {
        Recommendation
    },
    
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ]),
        ...mapState('track', [
            'recommendations'
        ])
    },
    methods: {
        addRecommendation(recommendation: Track): void {
            const tracks: Array<Track> = this.createdPlaylist.getTracks()
            tracks.push(recommendation)
            this.createdPlaylist.setTracks(tracks)
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

.recommendation:hover {
    cursor: pointer;
    background: rgb(201, 243, 239);
}
</style>