<template>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
    mounted() {
        this.initialize()
    },
    methods: {
        ...mapMutations('authorization', [
            'setClientId',
            'setClientSecret',
            'setResponseType',
            'setRedirectUri',
            'setState',
            'setScope',
            'setAuthorizationUrl'
        ]),
        initialize(): void {
            this.setClientId(process.env.VUE_APP_CLIENT_ID as string)
            this.setClientSecret(process.env.VUE_APP_CLIENT_SECRET as string)
            this.setResponseType(process.env.VUE_APP_RESPONSE_TYPE as string)
            this.setRedirectUri(process.env.VUE_APP_REDIRECT_URI as string)
            this.setState(process.env.VUE_APP_STATE as string)
            this.setScope(process.env.VUE_APP_SCOPE as string)
            this.setAuthorizationUrl(process.env.VUE_APP_AUTHORIZATION_URL as string)
        }
    }
})
</script>

<style>
body {
    margin: 0;
}
</style>
