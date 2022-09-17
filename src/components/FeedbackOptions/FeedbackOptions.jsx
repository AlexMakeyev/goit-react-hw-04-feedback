import PropTypes from 'prop-types';
import { OptionList, OptionItem, OptionButton } from './FeedBackOptions.styled'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map((option, index) => {
        return (
          <OptionItem key={index}>
            <OptionButton type="button" onClick={onLeaveFeedback}>
              {option}
            </OptionButton>
          </OptionItem>
        );
      })}
    </OptionList>
  );
};

export default FeedbackOptions;




FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};