<template>
    <div id="create-playlist-form">
        <div class="router-button">
            <router-link
                type="button"
                class="btn btn-secondary"
                :to="{
                    name: 'CreatePlaylistRecommendations'
                }"
            >
                Next
            </router-link>
        </div>
        <div class="form">
            <input type="text" placeholder="Name" class="form-control" v-model="name">
            <textarea class="form-control" placeholder="Description" v-model="description" rows="10"></textarea>
            <div class="selection">
                <div class="label">Collaborative </div>
                <select class="form-control" v-model="collaborative">
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                </select>
            </div>
            <div class="selection">
                <div class="label">Public </div>
                <select class="form-control" v-model="publicity">
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'

export default defineComponent({
    data() {
        return {
            collaborative: false as boolean,
            description: '' as string,
            name: '' as string,
            publicity: false as boolean
        }
    },
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ])
    },
    watch: {
        collaborative(): void {
            this.setCollaborative(this.collaborative)
        },
        description(): void {
            this.setDescription(this.description)
        },
        name(): void {
            this.setName(this.name)
        },
        publicity(): void {
            this.setPublicity(this.publicity)
        }
    },
    methods: {
        setCollaborative(collaborative: boolean) {
            this.createdPlaylist.setCollaborative(collaborative)
        },
        setDescription(description: string) {
            this.createdPlaylist.setDescription(description)
        },
        setName(name: string) {
            this.createdPlaylist.setName(name)
        },
        setPublicity(publicity: boolean) {
            this.createdPlaylist.setPublicity(publicity)
        }
    }
})
</script>

<style scoped>
#create-playlist-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.router-button {
    display: flex;
    justify-content: flex-end;
}

.selection {
    display: flex;
    align-items: center;
    gap: 20px;
}

.label {
    width: 150px;
}
</style>