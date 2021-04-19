<template>
    <div>
        <div class="player">
            <video controls muted autoPlay crossorigin="anonymus">
                <source :src="`http://localhost:5000/videos/video/${vidName}`" type="video/mp4">
                <track label="Français" kind="captions" srcLang="fr" :src="`http://localhost:5000/videos/video/${vidName}/caption`" default>
            </video>
        </div>
        <NuxtLink to="/" class="back-home">
            Back home
        </NuxtLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vidName: this.$route.params.name,
        }
    },
}
</script>

<style scoped>
.player {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 10em;  
}

.player video {
    min-width: 80vw;
}

video::cue {
    color: rgb(252, 252, 0);
    font-weight: bold;
}

.back-home {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;
}

.back-home:hover {
    color: rgb(212, 207, 207);
}

</style>