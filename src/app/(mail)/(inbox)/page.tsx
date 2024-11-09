import EmailComposition from "./_components/EmailComposition";
import InboxList from "./_components/InboxList";

export default async function HomePage() {
  return (
    <div className="flex flex-1">
      <InboxList />
      <EmailComposition />
    </div>
  );
}
