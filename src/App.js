import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Article from './components/Card'
import Grid from '@material-ui/core/Grid';
import { CounterContext } from "./context/ContextRouter";
import FullArticle from './components/FullArticle';
import Button from '@material-ui/core/Button';


function App() {
  const { value, setValue } = useContext(CounterContext);
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [article, setArticle] = useState('all');
  const [valid, setValid] = useState(true);

  const useStyles = makeStyles({
    validationBox: {
      display: valid === false ? 'inline-block' : 'none',
      border: '1px solid red',
      marginTop: '10px'
    },
    validationText: {
      color: 'red',
      padding: '0px 10px',
    },
    input: {
      width: '80%',
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline - block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border - box',
    },
    searchBox: {
      width: '30%',
      margin: '10px auto',
      textAlign: 'center'
    },
    cardsBox: {
      marginTop: '100px'
    }
  });
  const classes = useStyles();

  useEffect(() => {
    fetch("https://gnews.io/api/v4/search?q=" + (q === "" ? "example" : q) + "&token=1caa453c68931f03e83d466cd3b655e3")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.articles.pop();
        setData(data);
      });
  }, [q])

  let textInput = React.createRef();

  function handleClick() {
    if (textInput.current.value.length < 40 && textInput.current.value.match(/^[-_ a-zA-Z0-9]+$/)) {
      setQ(textInput.current.value);
      textInput.current.value = '';
      setValid(true);
    } else {
      setValid(false);
    }
  }

  function handleClickArticle(id) {
    setValue('article')
    setArticle(data.articles[id])
  }

  return (
    <div className="App">
      {value === 'home' ?
        <div>
          <div className={classes.searchBox}>
            <div>
              <input className={classes.input} ref={textInput} placeholder='What are you looking for?' />
            </div>
            <Button variant="contained" color="primary" onClick={handleClick}>Search Article</Button>
            <div className={classes.validationBox}>
              <p className={classes.validationText}>Only alphanumeric and space characters up to 40 symbols allowed</p>
            </div>
          </div>
          <div className={classes.cardsBox}>
            <Grid container spacing={3}>
              {data.articles === undefined ? '' : data.articles.map((article, i) => (
                <Grid key={i} item xs={12} md={4} xl={4}>
                  <div onClick={() => handleClickArticle(i)}>
                    <Article
                      publishedAt={article.publishedAt}
                      title={article.title}
                      description={article.description}
                      image={article.image}
                      url={article.url}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        :
        < FullArticle
          title={article.title}
          image={article.image}
          content={article.content}
          date={article.publishedAt}
        />
      }
    </div >
  );
}


export default App;
