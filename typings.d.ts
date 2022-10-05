export interface Genre {
    id: number
    name: string
}

export interface Movie {
    title: string
    bg_path: string
    media_type?: string
    rel_date?: string
    prem_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    origin_lang: string
    overview: string
    popularity: number
    poster_path: string
    vote_avg: number
    imdb: number
    rtom: number
}


export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }