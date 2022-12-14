'use client';

import { DELETE_NOTE } from '#/graphql/Mutation/mutation';
import { getNotes } from '#/graphql/Query/queries';
import { Notes } from '#/lib/types';
import { EmptyDashboard } from '#/ui/EmptyDashboard';
import { NavToSignIn } from '#/ui/NavToSignIn';
import PaginationComponent from '#/ui/Pagination';
import { SkeletonCard } from '#/ui/SkeletonCard';
import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Note() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [notesPerPage] = useState<number>(2);
  const { data: session } = useSession();
  const { data, loading } = useQuery(getNotes);
  const [resultDeleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: getNotes }, 'AllNotesQuery'],
  });

  const deleteNote = async (id: String) => {
    resultDeleteNote({
      variables: {
        id,
      },
    });
  };

  if (!session) return <NavToSignIn />;
  if (loading) return <SkeletonCard />;
  if (data?.notes.length === 0) return <EmptyDashboard />;

  const notes = data.notes;
  const indexOfLastNotes = currentPage * notesPerPage;
  const indexOfFirstNotes = indexOfLastNotes - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNotes, indexOfLastNotes);
  //Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <PaginationComponent
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
        totalNumbers={notes.length}
        indexOfLasts={indexOfLastNotes}
      />
      {currentNotes.map(({ title, content, id }: Notes) => (
        <div key={id as string}>
          <div className="mb-10 w-40 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:w-full lg:w-full">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
              {title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content}
            </p>
            <button
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => deleteNote(id)}
            >
              Delete Note
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
