<template>
<div>
  <div class="container">
    <div
      v-for="(video, id) in videoList"
      :key="id"
      class="vid-con"
    >
      <NuxtLink :to="`/player/${video.id.replace(/ /g, '-')}`">
        <div
          :style="{
            backgroundImage: `url(${video.poster})`
          }"
          class="vid"
        ></div>
        <div class="movie-info">
            <div class="details">
              <h2>{{video.name}}</h2>
              <p>{{video.duration}}</p>
            </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</div>
</template>
<script>
export default {
    props:['videoList'],
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
}

.vid-con {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  width: 50%;
  max-width: 22rem;
  margin: auto 1.6em;
  background: rgb(24, 23, 23);
}

.vid-con:hover {
  background: rgb(37, 36, 36);
}

.vid {
  height: 15rem;
  width: 100%;
  background-position: center;
  background-size: cover;
}
.movie-info {
  color: white;
  width: 100%;
}


.details {
  padding: 16px 20px;
}

/* ----- MEDIA QUERIES -----  */
 /*  less than 1180px) */
@media screen and (min-width: 100px) and (max-width: 1210px) { 

  .container {
    flex-direction: column;
  }

  .vid-con {
    width: 90%;
    max-width: 70vw;
    margin-bottom: 1.5rem;
  }

}
</style>