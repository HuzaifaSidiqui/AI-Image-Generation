import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchbarContainer = styled.div`
max-width: 550px;
width: 90%;
display: flex;
align-items: center;
border: 1px solid ${({theme})=> theme.secondary + 90};
color: ${({theme})=> theme.text_primary};
border-radius: 8px;
padding: 12px 16px;
gap: 6px;
cursor: pointer;
`

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchIcon/>
      <input 
      placeholder='Search with prompts or keywords...'
      style={{
        border: 'none',
        outline: 'none',
        width: '100%',
        color: 'inherit',
        fontSize: '16px',
        background: "transparent"
      }}/>
    </SearchbarContainer>
  )
}

export default Searchbar
