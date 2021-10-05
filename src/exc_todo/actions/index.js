import {SIGN_IN} from "./types";
import {SIGN_OUT} from "./types";

export const signIn = profile => {
    return {type: SIGN_IN, payload: profile}
}

export const signOut = () => {
    return {type: SIGN_OUT, payload: null}
}
