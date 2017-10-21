class ArtContent {
  constructor (id, imgSrc, opts = {}) {
    if (!id || !imgSrc) {
      throw new Error('Invalid parameters for class ArtContent. Expected id and imgSrc.')
    }

    this.id = id
    this.displayName = opts.displayName || ''
    this.imgSrc = imgSrc
    this.description = opts.description || ''
    this.youtube = opts.youtube || ''
    this.etsyUrl = opts.etsyUrl || 'https://www.etsy.com/ca/shop/AliceGuoArt?ref=l2-shop-info-avatar'
  }

  toObject () {
    return {
      id: this.id,
      displayName: this.displayName,
      imgSrc: this.imgSrc,
      description: this.description,
      youtube: this.youtube,
      etsyUrl: this.etsyUrl,
    }
  }
}

export default ArtContent
