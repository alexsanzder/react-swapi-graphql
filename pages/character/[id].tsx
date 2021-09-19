import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticPaths } from 'next';
import {
  PageGetPersonComp,
  ssrGetAllPlanets,
  ssrGetPerson,
} from '@/__generated_/pages';
import { withApollo } from '@/lib/withApollo';
import { romanize } from '@/utils/romanize';
import Message, { MessageType } from '@/components/Message';

const Character: PageGetPersonComp = ({ data }) => {
  const router = useRouter();

  const { data: planetData } = ssrGetAllPlanets.usePage();
  const planets = planetData?.allPlanets?.planets?.map((planet, idx) => {
    return { id: idx + 1, name: planet?.name };
  });

  const getPlanetImage = (name: string) => {
    const worlds = planets
      ?.filter(
        (planet) =>
          planet?.name?.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
      .map((p) => p.id);

    if (typeof worlds !== 'undefined' && worlds[0] < 20) {
      return `/images/planets/${worlds[0]}.jpg`;
    }
    return '';
  };

  return (
    <section className="relative mt-32 overflow-y-auto">
      <div className="sm:px-6 max-w-6xl px-4 mx-auto">
        <div className="md:pb-20 pb-12">
          <div className="lg:flex lg:justify-between">
            <div className="lg:flex-grow">
              <button
                className="flex items-center mb-8"
                onClick={() => router.back()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                <span className="ml-1">Back</span>
              </button>
              {data?.person ? (
                <div className="flex flex-col flex-1 w-full space-y-10">
                  <div className="flex flex-1 w-full border border-gray-800 rounded-lg">
                    <div className="relative w-1/3">
                      <Image
                        className="object-cover object-left-top rounded-l-lg"
                        layout="responsive"
                        width={410}
                        height={520}
                        src={`/images/people/${
                          router.query.person as string
                        }.jpg`}
                        alt={data?.person?.name as string}
                        placeholder="blur"
                        blurDataURL={`/images/people/${
                          router.query.person as string
                        }.jpg`}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 px-10 py-4">
                      <div className="flex items-center justify-between w-full border-b border-gray-800">
                        <span className="text-4xl font-bold capitalize">
                          {data?.person?.name}
                        </span>
                        <div className="flex flex-col items-center justify-between">
                          <span className="bg-gradient-to-tr from-gray-700 via-gray-800 to-black relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg">
                            {getPlanetImage(
                              data?.person?.homeworld?.name as string
                            ) ? (
                              <Image
                                className="object-cover object-center w-full h-full rounded-full"
                                layout="fill"
                                objectFit="cover"
                                src={getPlanetImage(
                                  data?.person?.homeworld?.name as string
                                )}
                                alt={data?.person?.homeworld?.name as string}
                                placeholder="blur"
                                blurDataURL={getPlanetImage(
                                  data?.person?.homeworld?.name as string
                                )}
                              />
                            ) : null}
                          </span>
                          <span className="py-4 pt-2 text-xs font-bold text-gray-100 uppercase">
                            {data?.person?.homeworld?.name}
                          </span>
                        </div>
                      </div>
                      <div className="sm:grid-cols-2 grid items-center justify-center w-full gap-5 mt-6">
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            species:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.species?.name
                              ? data?.person?.species?.name
                              : 'Human'}
                          </span>
                        </div>

                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            birth Year:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.birthYear}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            gender:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.gender}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            eye Color:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.eyeColor}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            mass:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.mass}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            height:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.height}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            hair Color:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.hairColor}
                          </span>
                        </div>
                        <div className="flex items-center px-6 py-4 border border-gray-800 rounded-lg">
                          <span className="px-2 text-sm font-bold uppercase">
                            skin Color:
                          </span>
                          <span className="text-sm text-center text-gray-100 capitalize">
                            {data?.person?.skinColor}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-10 py-8 border border-gray-800 rounded-lg">
                    <span className="py-4 text-sm font-bold uppercase">
                      films:
                    </span>
                    <div className="sm:grid-cols-3 sm:gap-x-6 md:gap-y-8 grid items-center justify-center w-full gap-12 pt-4">
                      {data?.person?.filmConnection?.edges?.map((edge) => (
                        <div
                          className="flex flex-col w-48 mx-auto"
                          key={edge?.node?.id}
                        >
                          <div className="h-72 relative w-full text-lg rounded-lg">
                            <Image
                              className="object-cover rounded-lg"
                              layout="fill"
                              src={`/images/films/${edge?.node?.episodeID}.jpg`}
                              alt={edge!.node!.title as string}
                            />
                          </div>
                          <div className="flex flex-col py-4 text-center">
                            <span className="text-sm font-semibold text-gray-400 uppercase">
                              {`Episode ${romanize(edge?.node?.episodeID)}`}
                            </span>
                            <span className="mt-1 text-base font-medium">
                              {edge?.node?.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Message
                  className="h-[calc(100vh-32rem)]"
                  type={MessageType.Loader}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetServerSideProps = async ({ params, req }) => {
  const res = await ssrGetPerson.getServerPage(
    { variables: { id: params!.id!.toString() || '' } },
    { req }
  );

  return res;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'cGVvcGxlOjE=' } }],
    fallback: true,
  };
};

export default withApollo(
  ssrGetPerson.withPage((arg) => ({
    variables: { id: arg?.query?.id?.toString() || '' },
  }))(Character)
);
