export const fileUpload = async ( archivo) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/duhxuahee/upload';
    
    const formData = new FormData();
    formData.append('upload_preset', 'diario-app-react');
    formData.append('file', archivo);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}