
export const imageUploadToImgbb = async (imageFile) => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_IMAGE_UPLOAD_KEY;
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: "POST",
            body: formData,
        })

        const data = await response.json();
        if (data.success) {
            return data.data.url;
        } else {
            throw new Error("Image upload failed");
        }

    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
}