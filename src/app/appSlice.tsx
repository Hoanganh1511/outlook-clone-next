import { MailSidebarType, TabType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reducerState {
  refresh: boolean;
  isLogin: boolean;
  activeSideBarMail: MailSidebarType;
  activeTopBar: TabType;
}

const initialState: reducerState = {
  refresh: true,
  isLogin: false,
  activeSideBarMail: "inbox",
  activeTopBar: "home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
    setActiveTopBar: (state, action: PayloadAction<TabType>) => {
      state.activeTopBar = action.payload;
    },
  },
});

export default appSlice;
