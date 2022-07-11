export type BaseProps = {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
};

export type MovieProps = {
    imdbID: string;
    Title?: string;
    Year?: string;
    Poster?: string;
    Type?: string;
    Runtime?: string;
    imdbRating?: number;
    Plot?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Country?: string;
    Language?: string;
};
