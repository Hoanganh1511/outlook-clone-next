export type TabType = "home" | "view" | "help";

export type MailSidebarType =
  | "inbox"
  | "sent-item"
  | "drafts"
  | "junk-email"
  | "deleted-items"
  | "archive"
  | "notes"
  | "history";

export interface IInbox {
  from: {
    name: string;
    address: string;
  };
  recipients: {
    name: string;
    address: string;
  }[];
  subject: string;
  html: string;
  text?: string;
  createdAt: Date;
  updatedAt: Date;
}
