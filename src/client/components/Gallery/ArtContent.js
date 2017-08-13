class ArtContent {
  constructor (id, imgSrc, displayName, description, youtube, opts) {
    if (!id || !imgSrc) {
      throw new Error('Invalid parameters for class ArtContent. Expected id and imgSrc.')
    }

    this.id = id
    this.displayName = displayName || ''
    this.imgSrc = imgSrc
    this.description = description || ''
    this.youtube = youtube || ''
    this.opts = opts || {}
  }

  toObject () {
    return {
      id: this.id,
      displayName: this.displayName,
      imgSrc: this.imgSrc,
      description: this.description,
      opts: this.opts,
    }
  }
}

export default ArtContent
