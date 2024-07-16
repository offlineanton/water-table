export const decodeData = (data: string) => {
    const decodedString = atob(data);
    const jsonObject = JSON.parse(decodedString);

    return jsonObject;
}