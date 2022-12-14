import Pagination from '#/ui/Pagination';
import Task from './Task';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Your To-do List</div>

      <div className="grid grid-cols-2 gap-4">
        <Task />
      </div>
    </div>
  );
}
