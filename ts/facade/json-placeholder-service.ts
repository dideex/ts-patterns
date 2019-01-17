import axios from 'axios'
import { IJsonPlaceholderService } from './ijson-placeholder-service'
import { Album, Comment, Photo, Post, Todo, User } from '../models'

export class JsonPlaceholder implements IJsonPlaceholderService {
  private _baseUrl: string = 'https://jsonplaceholder.typicode.com'

  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then(response => JSON.parse(response.data) as T[])
  }

  private _endpoints = {
    post: `${this._baseUrl}/post`,
    comments: `${this._baseUrl}/comments`,
    albums: `${this._baseUrl}/albums`,
    photos: `${this._baseUrl}/photos`,
    todos: `${this._baseUrl}/todos`,
    users: `${this._baseUrl}/users`
  }

  async getAlbums(): Promise<Album[]> {
    return this._getEntity<Album>(this._endpoints.albums)
  }
  async getComments(): Promise<Comment[]> {
    return this._getEntity<Comment>(this._endpoints.comments)
  }
  async getPhotos(): Promise<Photo[]> {
    return this._getEntity<Photo>(this._endpoints.photos)
  }
  async getPosts(): Promise<Post[]> {
    return this._getEntity<Post>(this._endpoints.post)
  }
  async getTodo(): Promise<Todo[]> {
    return this._getEntity<Todo>(this._endpoints.todos)
  }
  async getUsers(): Promise<User[]> {
    return this._getEntity<User>(this._endpoints.users)
  }
}
