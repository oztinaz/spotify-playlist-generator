<template>
    <div class="cassette">
        <div class="head">{{ name }}</div>
        <div class="body">
            <Wheel/>
            <div class="totals">
                {{ totalText }}
            </div>
            <Wheel/>
        </div>
        <div class="footer">
            <Trapezoid/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import Trapezoid from '@/components/cassette/Trapezoid.vue'
import Wheel from '@/components/cassette/Wheel.vue'

import { Playlist } from '@/models/playlist'

export default defineComponent({
    components: {
        Trapezoid,
        Wheel
    },
    props: {
        playlist: {
            type: Object as PropType<Playlist>,
            required: true
        }
    },
    computed: {
        totalText(): string {
            let text: string = this.playlist.getTotal() + ' track'
            if (this.total > 1) {
                text += 's'
            }
            return text
        },
        total(): number {
            return this.playlist.getTotal()
        },
        name(): string | null {
            return this.playlist.getName()
        }
    }
})
</script>

<style scoped>
.cassette {
    background: rgb(245, 245, 245);
    border: 1px solid rgb(167, 167, 167);
    box-shadow: outset 0px 5px 10px 0px rgba(136, 136, 136, 0.5);
    width: 350px;
    padding: 20px 20px 0 20px;
}

.body {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 25px 0;
}

.totals {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer {
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
</style>