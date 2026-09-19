import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const CharacterSearch: React.FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;

  return (
    <TextField
      fullWidth
      placeholder="Buscar personaje"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
        htmlInput: { 'aria-label': 'Buscar personaje' },
      }}
    />
  );
};
