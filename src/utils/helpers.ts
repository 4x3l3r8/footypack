/* eslint-disable @typescript-eslint/restrict-template-expressions */
// Function to convert an image to a base64 string
export function convertToBase64(image: File, callback: (string: string | ArrayBuffer | null) => void) {
    const reader = new FileReader();

    reader.onload = () => {
        // The result property contains the base64 encoded string
        const base64String = reader.result;
        callback(base64String);
    };

    reader.onerror = (error) => {
        console.error(`Error converting image: ${error.message}`);
        callback(null);
    };

    reader.readAsDataURL(image); // Read the image as a data URL
}