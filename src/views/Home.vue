<template>
    <div id="home">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
    computed: {
        ...mapState([
            'message'
        ])
    }
})
</script>
