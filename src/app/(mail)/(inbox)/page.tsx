"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import EmailComposition from "./_components/EmailComposition";
import InboxList from "./_components/InboxList";
import { Skeleton } from "@/components/common/Skeleton";
import { RootState } from "@/redux/configure-store";
import inboxSlice from "@/redux/inboxSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { isGenerateNewEmail } = useAppSelector(
    (state: RootState) => state.inbox
  );
  const { setGenerateNewEmail } = inboxSlice.actions;
  return (
    <div className="flex flex-1">
      <InboxList />
      {isGenerateNewEmail && <EmailComposition />}
    </div>
  );
}
export const InboxListSkeleton = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="w-full flex items-center justify-between bg-white p-[12px]"
        >
          <div className="flex items-center gap-[8px]">
            <Skeleton className="size-[40px] rounded-full" />
            <div className="w-[180px] flex flex-col gap-[8px]">
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
            </div>
          </div>
          <Skeleton className="w-[60px] h-[20px]" />
        </div>
      ))}
    </div>
  );
};
