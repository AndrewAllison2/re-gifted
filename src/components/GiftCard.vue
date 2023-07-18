<template>
  <div>
    {{ gift }}
  </div>
  <!-- <div><p>{{ gProp }}</p></div>
  <div class="card" style="width: 18rem;">
          <img :src="giftProp?.imgUrl" class="card-img-top" :alt="gift?.tag">
            <div class="card-body">
              <h5 class="card-title">{{giftProp?.tag}}</h5>
            </div>
          </div> -->
        
</template>


<script>
import { Gift } from "../models/Gift.js";
// import { AppState } from "../AppState.js";


export default {
  
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
