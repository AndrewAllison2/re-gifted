import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {

  async getGifts() {
    const res = await api.get('/api/gifts')
    logger.log('getting gifts', res.data)
    const gifts = res.data.map(giftPojo => new Gift(giftPojo))

    AppState.gifts = gifts
    logger.log('gifts in appstate', gifts)
  }
}

export const giftsService = new GiftsService()