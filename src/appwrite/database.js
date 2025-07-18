import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (err) {
            console.log("Appwrite service :: createPost :: error", err);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (err) {
            console.log("Appwrite service :: updatePost :: error", err);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (err) {
            console.log("Appwrite service :: deletePost :: error", err);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (err) {
            console.log("Appwrite service :: getPost :: error", err);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (err) {
            console.log("Appwrite service :: getPosts :: error", err);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (err) {
            console.log("Appwrite service :: uploadFile :: error", err);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId);
            return true;
        } catch (err) {
            console.log("Appwrite service :: deleteFile :: error", err);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFileView(config.appwriteBucketId, fileId);
            // .replace("preview", "view") + "&mode=admin";
        } catch (err) {
            console.log("Appwrite service :: getFilePreview :: error", err);
            return false;
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;
