import { MailSidebarType, TabType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type FilterInboxType =
  | "all"
  | "unread"
  | "flagged"
  | "to-me"
  | "has-files"
  | "mentions-me";
export type SortByInboxType =
  | "date"
  | "from"
  | "category"
  | "size"
  | "importance"
  | "subject";
export type SortOrderInboxType = "a-z" | "z-a" | "newest" | "oldest";
interface reducerState {
  isGenerateNewEmail: boolean;
  selectedInboxes: string[];
  filterInbox: FilterInboxType;
  sortByInbox: SortByInboxType;
  sortOrderInbox: SortOrderInboxType;
}

const initialState: reducerState = {
  isGenerateNewEmail: false,
  selectedInboxes: [],
  filterInbox: "all",
  sortByInbox: "date",
  sortOrderInbox: "newest",
};

export const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    setGenerateNewEmail: (state, action: PayloadAction<boolean>) => {
      state.isGenerateNewEmail = action.payload;
    },
    setSelectedInboxes: (state, action: PayloadAction<string>) => {
      state.selectedInboxes = [...state.selectedInboxes, action.payload];
    },
    setFilterInbox: (state, action: PayloadAction<FilterInboxType>) => {
      state.filterInbox = action.payload;
    },
    setSortByInbox: (state, action: PayloadAction<SortByInboxType>) => {
      state.sortByInbox = action.payload;
    },
    setSortOrderInbox: (state, action: PayloadAction<SortOrderInboxType>) => {
      state.sortOrderInbox = action.payload;
    },
  },
});

export default inboxSlice;
