<template>
    <div class="cassette">
        <div class="head">
            <Screw :style="{padding: '5px'}"/>
            <Trapezoid/>
            <Screw :style="{padding: '5px'}"/>
        </div>
        <Body/>
        <div class="footer">
            <div class="string">
                <div class="empty"></div>
                <div class="info">
                    <div class="title text-truncate">{{ playlist.getName() }}</div>
                    <div class="tracks">(
                        <div>{{ playlist.getTotal() }}</div>
                        <div>Songs</div>    
                    )</div>
                </div>
                <div class="empty"></div>
            </div>
            <div class="footer-bottom">
                <Screw :style="{paddingLeft: '5px', paddingBottom: '5px'}"/>
                <Screw :style="{paddingRight: '5px', paddingBottom: '5px'}"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

// Components
import Body from '@/components/cassette/body/Main.vue'
import Screw from '@/components/cassette/Screw.vue'
import Trapezoid from '@/components/cassette/Trapezoid.vue'

// Models
import { Playlist } from '@/models/playlist'

export default defineComponent({
    components: {
        Body,
        Screw,
        Trapezoid
    },
    props: {
        playlist: {
            type: Object as PropType<Playlist>,
            required: true
        }
    }
})
</script>

<style scoped>
.cassette {
    border: 1px solid #5f6167;
    border-radius: 7px;
    background: #5f6167;

    height: 300px;
    width: 470px;
    box-shadow: 2px 2px 2px 2px;
}

.head {
    display: flex;
    justify-content: space-between;
}

.screw-container {
    padding: 5px;
}

.string {
    background: #e9e3df;
    margin: 10px 20px;
}

.empty {
    height: 10px;
}

.empty:first-child {
    border-bottom: 1px solid #5c5c5c;
}

.empty:last-child {
    border-top: 1px solid #5c5c5c;
}

.info {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.tracks {
    display: flex;
    gap: 4px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
}
</style>