<template>
    <div id="authorization">
        {{ code }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapActions } from 'vuex'

export default defineComponent({
    computed: {
        code(): string | null {
            if (this.$route.query.code) {
                return this.$route.query.code.toString()
            }
            return null
        }
    },
    async mounted() {
        if (this.code !== null) {
            await this.getAccessToken(this.code)
        }
    },
    methods: {
        ...mapActions('authorization', [
            'getAccessToken'
        ])
    }
})
</script>

<style scoped>
    
</style>