import { Post } from "../Models/index.js";

class PostService {
	async create(post) {
		const createdPost = await Post.create(post);
		await createdPost.save();
		return createdPost;
	}

	async getAll() {
		const posts = await Post.find();
		return posts;
	}

	async getOne(id) {
		if (!id) {
			throw new Error('id not indication');
		}
		const post = await Post.findById(id);
		return post;
	}

	async update(post) {
		if (!post._id) {
			throw new Error('id not indication');
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new:true});
		return updatedPost;
	}

	async delete(id) {
		if (!id) {
			throw new Error('id not indication');
		}
		const postDelete = await Post.findByIdAndDelete(id)
		return postDelete;
	}
}

export default new PostService();