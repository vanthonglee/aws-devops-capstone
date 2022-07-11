import { SearchIcon } from "@components/icons";
import clsx from "clsx";
import React, { useRef } from "react";
import { BaseProps } from "src/types";

type SearchProps = {
    text: string;
    onChange?: (text: string) => void;
};

const Search = ({
    className,
    text,
    onChange,
}: SearchProps & BaseProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value);
            onChange?.(inputRef.current.value);
        }
    };

    return (
        <div className={clsx(["form-control", className])}>
            <div className="input-group">
                <input
                    data-test="input-search"
                    ref={inputRef}
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleChange();
                        }
                    }}
                />
                <button className="btn btn-square" onClick={handleChange}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default Search;
