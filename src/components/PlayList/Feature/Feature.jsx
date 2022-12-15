import { BsCheck2Circle } from 'react-icons/bs';
import { FeatureItem, ListWrapper } from './Feature.styled';

const Feature = ({ featureArray }) => {
  return (
    <>
      {featureArray.map((item, index) => {
        return (
          <FeatureItem key={index}>
            <ListWrapper>
              <BsCheck2Circle size={22} style={{ marginRight: '10px' }} />
              {item}
            </ListWrapper>
          </FeatureItem>
        );
      })}
    </>
  );
};

export default Feature;
