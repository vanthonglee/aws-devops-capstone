import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "@components/search";
import { MovieProps } from "src/types";

export const Movies = (): JSX.Element => {
    const [searchText, setSearchText] = useState<string>("Marvel");
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        setCurrentPage(0);
        remove();
        setTimeout(() => {
            refetch();
        }, 1000);
    }, [searchText]);

    const onSearchChange = (text: string) => {
        setSearchText(text);
    };

    const { data, status, fetchNextPage, hasNextPage, refetch, remove } =
        useInfiniteQuery(
            "infiniteMovies",
            async ({ pageParam = 1 }) =>
                await fetch(
                    `https://www.omdbapi.com/?apikey=b9bd48a6&s=${searchText}&type=movie&page=${pageParam}`,
                ).then((result) => {
                    return result.json();
                }),
            {
                getNextPageParam: (lastPage, pages) => {
                    return +lastPage.totalResults > currentPage * 10
                        ? currentPage + 1
                        : null;
                },
                enabled: !!searchText.length,
                onSuccess: () => {
                    setCurrentPage(currentPage + 1);
                },
            },
        );

    return (
        <section className="flex-1 lg:container my-8 mx-auto">
            <div className="flex justify-center my-5">
                <Search text={searchText} onChange={onSearchChange} />
            </div>

            {status === "success" && (
                <InfiniteScroll
                    dataLength={data?.pages.length * 10}
                    next={fetchNextPage}
                    hasMore={Boolean(hasNextPage)}
                    scrollThreshold="150px"
                    loader={<h1 className="text-8xl">Loading...</h1>}
                >
                    <div
                        className={clsx(
                            "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5",
                        )}
                    >
                        {data?.pages.map((page) => (
                            <>
                                {page?.Search?.map((movie: MovieProps) => (
                                    <MovieCard
                                        key={`mvc-${movie.imdbID}`}
                                        imdbID={movie.imdbID}
                                        Poster={movie.Poster}
                                        Title={movie.Title}
                                        Year={movie.Year}
                                    />
                                ))}
                            </>
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </section>
    );
};
