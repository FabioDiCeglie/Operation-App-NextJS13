'use client';

import { type Category } from '#/lib/hooks';
import { TabNavItem } from '#/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          // href={`/route-groups/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default CategoryNav;
