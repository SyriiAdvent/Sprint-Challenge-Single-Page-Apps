import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CharacterList() {
  const classes = useStyles();
  const searchValue = ['?name=', '?page=']
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  const searchHandler = e => {
    setSearchQuery(e)
  }

  useEffect(() => {
    if(searchQuery.length < 1) {
      axios(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchValue[1]}${page}`)
        .then(response => {
          console.log(`Main fetch`, response)
          setData(response.data.results)
        })
        .catch(error => console.error(`Couldn't retrieve data `, error))
    }
  }, [page]);

  useEffect(() => {
    if(searchQuery.length > 1) {
      axios(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchValue[0]}${searchQuery}`)
        .then(response => {
            console.log(`Search Fetch `, response)
            setData(response.data.results);
        })
        .catch(error => console.error(`Couldn't retrieve data `, error))
    }
  }, [searchQuery]);
  

  // console.log(data)

  return (
    <section className="character-list">
      <SearchForm query={searchHandler} />
      <div className={classes.root}>
        {page < 1 ?  <Button onClick={() => setPage(page - 1)} >previous page</Button> : null }
        {page > 1 ?  <Button onClick={() => setPage(page - 1)} >previous page</Button> : null }
        <Button onClick={() => setPage(page + 1)} >Next Page</Button>
      </div>
      {data.map( ele => <CharacterCard data={ele} /> )}
    </section>
  );
}


// useEffect(() => {
//   if(searchQuery.length < 1) {
//     axios(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchValue[1]}${page}`)
//       .then(response => {
//         console.log(response)
//         setData(response.data.results)
//       })
//       .catch(error => console.error(`Couldn't retrieve data `, error))
//   } else if(searchQuery.length > 0) {
//       axios(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${searchValue[0]}${searchQuery}`)
//         .then(response => {
//           console.log(response)
//           setData(response.data.results)
//         })
//         .catch(error => console.error(`Couldn't retrieve data `, error))
//   }
//     }, [searchQuery]);