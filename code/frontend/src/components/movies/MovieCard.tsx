import Link from "next/link";
import React from "react";
import { MovieProps } from "src/types";

export const MovieCard = ({
    Poster,
    Title,
    imdbID,
    Year,
}: MovieProps): JSX.Element => {
    return (
        <div className="w-full flex flex-col p-3" data-test="movie-card">
            <div className="bg-neutral shadow-xl rounded-lg overflow-hidden flex-1 flex flex-col">
                <Link href={`/movies/${imdbID}`}>
                    <a className="aspect-mv-banner relative" title={Title}>
                        <div
                            className="bg-cover h-full relative z-10"
                            style={{
                                backgroundImage: `url(${Poster})`,
                            }}
                        />
                        <div className=" h-full bg-gray-300 animate-pulse absolute z-[1] w-full top-0 right-0 left-0 bottom-0" />
                    </a>
                </Link>
                <div className="p-4 flex-1 flex flex-col" style={{}}>
                    <h3 className="mb-4 text-base md:text-lg line-clamp-2">
                        <Link href={`/movies/${imdbID}`}>
                            <a title={Title}>{Title}</a>
                        </Link>
                    </h3>
                    <div className="text-xs opacity-50" style={{}}>
                        {Year}
                    </div>
                </div>
            </div>
        </div>
    );
};
