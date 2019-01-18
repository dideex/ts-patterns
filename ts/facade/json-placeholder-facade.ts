import { IJsonPlaceholderService } from './ijson-placeholder-service'
import { User } from '../models'

export class JsonPlaceholderFacade {
  constructor(private _service: IJsonPlaceholderService) {}

  async getUser(userId: number): Promise<User | null> {
    const allUsers = await this._service.getUsers()
    const currentUser = allUsers.find(user => user.id === userId)
    // const allPosts = await this._service.getPosts()
    const allTodos = await this._service.getTodo()
    if (currentUser) {
      // currentUser.posts = allPosts.filter(post => post.userId === userId)
      currentUser.todos = allTodos.filter(todo => todo.userId === userId)
      return currentUser
    } else {
      return null
    }
  }
}
