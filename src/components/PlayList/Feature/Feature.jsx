import { FeatureItem, ListWrapper, Svg } from './Feature.styled';
import sprite from '../../../images/sprite.svg';

const Feature = ({ featureArray }) => {
  return (
    <>
      {featureArray.map((item, index) => {
        return (
          <FeatureItem key={index}>
            <ListWrapper>
              <div>
                <Svg width="20" height="20">
                  <use href={sprite + '#icon-check'} />
                </Svg>
              </div>
              {item}
            </ListWrapper>
          </FeatureItem>
        );
      })}
    </>
  );
};

export default Feature;
