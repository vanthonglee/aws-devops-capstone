import React from "react";

import { Container, Header } from "@components";
import { useRouter } from "next/router";
import { StarIcon } from "@components/icons";
import { MovieProps } from "src/types";
import { GetServerSideProps } from "next";

const MovieDetailPage = ({ movie }: { movie: MovieProps }): JSX.Element => {
    const router = useRouter();

    return (
        <Container>
            <Header />
            <button onClick={() => router.push("/")} className="btn glass">
                Back
            </button>

            <section className="lg:max-w-5xl my-8 mx-auto grid grid-cols-3 gap-x-6">
                <div className="aspect-mv-banner relative">
                    <div
                        className="bg-cover h-full relative z-10"
                        style={{
                            backgroundImage: `url(${movie.Poster})`,
                        }}
                    />
                    <div className=" h-full bg-gray-300 animate-pulse absolute z-[1] w-full top-0 right-0 left-0 bottom-0" />
                </div>
                <div className="col-span-2">
                    <div className="grid">
                        <div>
                            <h1 className="text-4xl">{movie.Title}</h1>
                        </div>
                        <div className="text-sm opacity-70 flex items-baseline">
                            {movie.Runtime} | {movie.imdbRating} {"   "}
                            <StarIcon
                                style={{
                                    alignSelf: "baseline",
                                    width: "13px",
                                    marginLeft: "4px",
                                }}
                            />{" "}
                        </div>
                        <p className="text-justify pr-2 mt-3">{movie.Plot}</p>
                        <hr className="my-6" />
                        <div>
                            <div className="flex">
                                <div className="w-[100px]">Genre:</div>
                                <div className="w-2/3 ">{movie.Genre}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Director:</div>
                                <div className="w-2/3 ">{movie.Director}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Writer:</div>
                                <div className="w-2/3 ">{movie.Writer}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Actors:</div>
                                <div className="w-2/3 ">{movie.Actors}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Country:</div>
                                <div className="w-2/3 ">{movie.Country}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Language:</div>
                                <div className="w-2/3 ">{movie.Language}</div>
                            </div>
                            <div className="flex">
                                <div className="w-[100px]">Year:</div>
                                <div className="w-2/3 ">{movie.Year}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

const redirectHome = {
    redirect: {
        permanent: false,
        destination: "/login",
    },
    props: {},
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59",
    );

    const id = context?.params?.id;

    if (!id) {
        return redirectHome;
    }

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=b9bd48a6&i=${id}`,
    );
    const movie = await response.json();

    if (movie.Error) {
        return redirectHome;
    }

    // Pass data to the page via props
    return { props: { movie } };
};

export default MovieDetailPage;
