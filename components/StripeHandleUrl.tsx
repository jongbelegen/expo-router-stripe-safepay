import {useURL} from "expo-linking";
import {useStripe} from "@stripe/stripe-react-native";
import {useEffect} from "react";

export function StripeHandleUrl() {
    const url = useURL();
    const {handleURLCallback} = useStripe();

    useEffect(() => {
        if (url?.includes("safepay")) {
            handleURLCallback(url);
        }
    }, [url, handleURLCallback]);

    return null;
}