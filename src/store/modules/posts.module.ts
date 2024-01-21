import { createStore } from '@/helpers'
import { Post } from '@/types'

export const [postsStore, usePostsState] = createStore(
  'posts',
  {
    posts: [] as Post[],
  },
  state => ({
    loadPosts: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      ).then(res => res.json())

      state.posts = response as unknown as Post[]
    },
  }),
)
