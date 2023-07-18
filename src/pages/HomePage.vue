<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 text-center text-white bg-success">
        <h1>Gifted</h1>
      </div>


      <div class="col-9">
        <div class="row">
          <div class="gifts col-4 mt-5 p-3">
            <GiftCard v-for="gift in gifts" :key="gift.id" :gift="g" />
        <!-- <div v-for="gift in gifts" :key="gift.id" class="col-4 mt-5 p-3"> -->
          <!-- <div class="card" style="width: 18rem;">
          <img :src="gift.imgUrl" class="card-img-top" alt="Bad Gift">
            <div class="card-body">
              <h5 class="card-title">{{gift.tag}}</h5>
            </div>
          </div> 
        </div> -->
      </div>
      </div>
    </div>     
  </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import {giftsService} from "../services/GiftsService.js"
import { AppState } from "../AppState.js";
import GiftCard from "../components/GiftCard.vue.js";



export default {
    setup() {
        async function getGifts() {
            try {
                await giftsService.getGifts();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            logger.log("Home page mounted");
            getGifts();
        });
        return {
            gifts: computed(() => AppState.gifts),
        };
    },
    components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
