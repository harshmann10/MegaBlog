import { useForm } from "react-hook-form";
import databaseService from "../../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Button, Input, RTE, Select } from "../index";

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } =
        useForm({
            defaultValues: {
                title: post?.title || "",
                slug: post?.$id || "",
                content: post?.content || "",
                status: post?.status || "active",
            },
        });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            let newFile = null;
            try {
                newFile = data.image[0]
                    ? await databaseService.uploadFile(data.image[0])
                    : null;

                const dbPost = await databaseService.updatePost(post.$id, {
                    ...data,
                    featuredImage: newFile ? newFile.$id : undefined,
                });

                if (dbPost) {
                    if (newFile) {
                        await databaseService.deleteFile(post.featuredImage);
                    }
                    navigate(`/post/${dbPost.$id}`);
                }
            } catch (error) {
                console.error("Error updating post:", error);
                if (newFile) await databaseService.deleteFile(newFile.$id);
                alert("Failed to update post. Please try again.");
            }
        } else {
            let file = null;
            try {
                file = await databaseService.uploadFile(data.image[0]);

                data.featuredImage = file.$id;
                const dbPost = await databaseService.createPost({
                    ...data,
                    userId: userData.$id,
                });

                if (dbPost) navigate(`/post/${dbPost.$id}`);
            } catch (error) {
                console.error("Error creating post:", error);
                if (file) await databaseService.deleteFile(file.$id);
                alert("Failed to create post. Please try again.");
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap p-8 bg-gray-800 rounded-lg shadow-xl text-white"
        >
            <div className="w-full lg:w-2/3 px-2 mb-4 lg:mb-0">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), {
                            shouldValidate: true,
                        });
                    }}
                />
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                    className="mb-4"
                />
            </div>
            <div className="w-full lg:w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4 bg-gray-700 text-white border border-gray-600 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4 p-2 border border-gray-600 rounded-lg bg-gray-700">
                        <img
                            src={databaseService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg object-cover w-full h-48"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    {...register("status", { required: true })}
                />
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-600" : "bg-blue-600"}
                    className="w-full py-2 px-4 rounded-md font-semibold text-white transition duration-200 ease-in-out hover:opacity-90"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;
