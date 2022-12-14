import Pagination from '#/ui/Pagination';
import Note from './Note';

export default async function Page() {
  return (
    <div className="space-y-4">
      <div className="text-l font-medium text-gray-500">Your Notes</div>
      <div className="grid grid-cols-2 gap-4">
        <Note />
      </div>
    </div>
  );
}
