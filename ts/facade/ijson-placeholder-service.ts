import { Album, Comment, Photo, Post, Todo, User } from '../models'

export interface IJsonPlaceholderService {
  getAlbums(): Promise<Album[]>
  getComments(): Promise<Comment[]>
  getPhotos(): Promise<Photo[]>
  getPosts(): Promise<Post[]>
  getTodo(): Promise<Todo[]>
  getUsers(): Promise<User[]>
}
