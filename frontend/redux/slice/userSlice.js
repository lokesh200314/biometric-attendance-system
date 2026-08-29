import { createSlice } from "@reduxjs/toolkit";

const session = JSON.parse(sessionStorage.getItem("authUser"));

const initialState = {

    name: session ? session?.name : "",
    token: session ? session?.token : "",
    email: session ? session?.email : "",
    roleId: session ? session?.roleId : "",
    user_id: session ? session?.user_id : "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserState: (state, action) => {
            const updates = action.payload;
            if (updates) {
                sessionStorage.setItem(
                    "authUser",
                    JSON.stringify({ ...state, ...updates })
                );
                return {
                    ...state,
                    ...updates,
                };
            }
            return state;
        },

    },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
