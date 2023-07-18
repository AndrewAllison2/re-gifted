export class Gift {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.opened = data.opened || false
    this.imgUrl = data.url || ''

  }
}

