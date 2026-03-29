import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';

interface SearchBarProps {
    initialSearchTerm: string | null;
    defaultSearchTerm?: string;
    onSearch?: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch, initialSearchTerm, defaultSearchTerm }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = React.useState<string>(initialSearchTerm ?? defaultSearchTerm ?? '');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch && onSearch(value);
    };

    useEffect(() => {
        setSearchTerm(initialSearchTerm ?? defaultSearchTerm ?? '');
    }, [initialSearchTerm, defaultSearchTerm]);

    return (
        <div>
            <TextField
                value={searchTerm}
                type="text"
                placeholder="Search..."
                onChange={handleInput}
                size="small"
            />
        </div>
    );
};

export default SearchBar