import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  PageGetAllPeopleComp,
  ssrGetAllPeople,
  ssrGetAllPlanets,
} from '@/__generated_/pages';
import { withApollo } from '@/lib/withApollo';
import { Person } from '@/__generated_/graphql';
import { useSearch } from '@/context/SearchContext';
import Message, { MessageType } from '@/components/Message';

const Characters: PageGetAllPeopleComp = () => {
  const { searchInput } = useSearch();

  const { data: planetData } = ssrGetAllPlanets.usePage();
  const planets = planetData?.allPlanets?.planets?.map((planet, idx) => {
    return { id: idx + 1, name: planet?.name };
  });

  const { data } = ssrGetAllPeople.usePage();
  const people = data?.allPeople?.people?.map((person, idx) => ({
    personId: idx + 1,
    ...person,
  }));
  const [suggestions, setSuggestions] = useState<any[] | undefined>(people);
  const getFilteredRows = (
    characters: any[] | undefined,
    filterKey: string
  ) => {
    return characters?.filter((character: any) => {
      return (
        character!.name!.toLowerCase().indexOf(filterKey.toLowerCase()) > -1 ||
        character!
          .homeworld!.name!.toLowerCase()
          .indexOf(filterKey.toLowerCase()) > -1
      );
    });
  };

  useEffect(() => {
    const suggest = getFilteredRows(people, searchInput);
    setSuggestions(suggest);
  }, [searchInput]);

  const getPlanetId = (name: string) =>
    planets
      ?.filter(
        (planet) =>
          planet?.name?.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
      .map((p) => p.id as number);

  return (
    <section className="mt-32">
      <div className="sm:px-6 max-w-6xl px-4 mx-auto">
        <div className="md:pb-20 pb-12">
          <div className="lg:flex lg:justify-between">
            <div className="lg:flex-grow">
              <h4 className="h3 mb-8 text-3xl font-bold text-center uppercase">
                {searchInput ? 'Search results' : 'All Characters'}
              </h4>
              {suggestions?.length ? (
                <div className="sm:grid-cols-3 sm:gap-x-6 md:gap-y-8 grid items-start gap-12">
                  {suggestions?.map((person) => (
                    <div
                      className="flex flex-col border border-gray-800 rounded-lg"
                      key={person?.id}
                    >
                      <Link
                        href={`/character/${person?.id}?person=${person.personId}`}
                      >
                        <a className="relative">
                          <Image
                            className="object-cover object-left-top rounded-t-lg"
                            layout="responsive"
                            width={410}
                            height={520}
                            src={`/images/people/${
                              person!.personId as string
                            }.jpg`}
                            alt={person!.name as string}
                            placeholder="blur"
                            blurDataURL={`/images/people/${
                              person!.personId as string
                            }.jpg`}
                          />
                        </a>
                      </Link>
                      <div className=" flex items-center justify-between px-8 py-4">
                        <div className="flex flex-col items-start justify-between">
                          <Link
                            href={`/character/${person?.id}?person=${person.personId}`}
                          >
                            <a className="text-2xl font-bold capitalize">
                              {person?.name}
                            </a>
                          </Link>
                          <span className="text-lg font-medium text-white">
                            {person?.species?.name
                              ? person?.species?.name
                              : 'Human'}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-between py-4">
                          <span className="bg-gradient-to-tr from-gray-700 via-gray-800 to-black relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg">
                            {/* <Image
                              className="object-cover object-center w-full h-full rounded-full"
                              layout="fill"
                              objectFit="cover"
                              src={`/images/planets/${getPlanetId(
                                person?.homeworld?.name
                              )}.jpg`}
                              alt={person?.homeworld?.name as string}
                              placeholder="blur"
                              blurDataURL={`/images/planets/${getPlanetId(
                                person?.homeworld?.name
                              )}.jpg`}
                            /> */}
                          </span>
                          <span className="pt-2 text-xs font-bold text-center text-gray-100 uppercase">
                            {person?.homeworld?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Message
                  className="h-[calc(100vh-32rem)]"
                  message="We couldn't find anything!"
                  type={MessageType.Nada}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetAllPeople.getServerPage({}, ctx);
};

export default withApollo(Characters);
