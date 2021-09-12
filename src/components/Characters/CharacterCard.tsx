import React, { useState } from 'react';
import { CharacterType } from '../../types';
import { CharacterModal } from './CharacterModal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center'
  },
  media: {
    width: 304,
    height: 300,
  },
});


export const CharacterCard: React.FC<{ character: CharacterType }> = ({ character }) => {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);
  const { id, name, image } = character;

  return (
    <>
      <Card
        className={classes.root}
        key={id}
        onClick={() => setModalActive(true)}
      >
        <CardMedia
          className={classes.media}
          image={image}
          title="character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </Card>
      <CharacterModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        character={character}
      />
    </>
  )
};