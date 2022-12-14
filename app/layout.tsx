'use client';
import '#/styles/globals.css';
import GlobalNav from './GlobalNav';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../graphql/apollo';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js 13</title>
        <meta name="description" content="Next.js" key="desc" />
      </head>
      <body className="overflow-y-scroll bg-gray-900">
        <SessionProvider>
          <ApolloProvider client={apolloClient}>
            <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
              <div className="col-start-2">
                <GlobalNav />
              </div>

              <div className="col-start-3 w-72 space-y-6 md:w-full lg:w-full">
                <div className="rounded-xl border border-gray-800 bg-black p-8">
                  {children}
                </div>
              </div>
            </div>
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
