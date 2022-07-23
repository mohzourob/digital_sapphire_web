import axios from "../axios";

export const createNonceCode = async(walletPublicAddress: String) => {
    const { data } = await axios.post("/users/nonceCode", {
        walletPublicAddress
    })

    return data;
}

export const loginUser = async (signature: String, walletPublicAddress: String) => {
    const { data } = await axios.post("/users/login", {
        signature,
        walletPublicAddress
    })

    return data;
}
