import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/characters";
import { RootState } from "../../store/index";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(4),
      },
    },
  }),
);

export function PaginationCharacters() {
  const pageInfo = useSelector((state: RootState) => state.characters.pageInfo);
  const dispatch = useDispatch();

  const { pages } = pageInfo;

  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

  };

  dispatch(setCurrentPage(page));

  return (
    <>
      <div className={classes.root}>
        <Pagination count={pages} page={page} onChange={handleChange} size="large" />
      </div>
    </>
  )
}

