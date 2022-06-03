<template>
    <div id="ask-authorization">
        <a :href="url">Authorization</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'

export default defineComponent({
    computed: {
        ...mapState('authorization', [
            'authorizationUrl',
            'responseType',
            'clientId',
            'scope',
            'redirectUri',
            'state',
            'scope'
        ]),
        url(): string {
            return this.authorizationUrl + '?' + this.queryString
        },
        queryString(): string {
            return new URLSearchParams(this.params).toString()
        },
        params(): Record<string, string> {
            return {
                response_type: this.responseType,
                client_id: this.clientId,
                scope: this.scope,
                redirect_uri: this.redirectUri,
                state: this.state
            }
        }
    },
})
</script>

<style scoped>
    
</style>