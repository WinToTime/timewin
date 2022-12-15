import PlayItem from './PlayItem';
import PlayItemTop from './PlayItemTop';
import { List } from './PlayList.styled';

const PlayList = ({ arreyList }) => {
  const sortListByRating = arreyList.sort((a, b) => b.rating - a.rating);
  const topList = sortListByRating.slice(0, 3);
  const list = sortListByRating.slice(3);

  return (
    <List>
      {topList.map(({ id, logo, title, rating, description, feature, link }) => {
        return (
          <PlayItemTop
            playItemTop={{ id, logo, title, rating, description, feature, link }}
            key={id}
          />
        );
      })}
      {list.map(({ id, logo, title, rating, description, feature, link }) => {
        return (
          <PlayItem playItem={{ id, logo, title, rating, description, feature, link }} key={id} />
        );
      })}
    </List>
  );
};

export default PlayList;
