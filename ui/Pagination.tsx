export type Props = {
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage: number;
  indexOfLastNotes: number;
  totalNumberOfNotes: number;
};

const PaginationComponent = ({
  paginateFront,
  paginateBack,
  currentPage,
  indexOfLastNotes,
  totalNumberOfNotes,
}: Props) => (
  <div className="mb-4">
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        <li>
          {currentPage == 1 ? (
            ''
          ) : (
            <a
              onClick={() => {
                paginateBack();
              }}
              className="rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          )}
        </li>

        <li>
          {indexOfLastNotes == totalNumberOfNotes ? (
            ''
          ) : (
            <a
              onClick={() => {
                paginateFront();
              }}
              className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          )}
        </li>
      </ul>
    </nav>
  </div>
);

export default PaginationComponent;
