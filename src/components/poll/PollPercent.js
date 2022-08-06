import {
  PollPercentageDecimalAndPercent,
  PollPercentageWholeNumber,
  PollQuestionAndPercentContainer,
} from '../styles/Poll.style';
import PollPercentageBar from './PollPercentageBar';
import PollQuestion from './PollQuestion';

const PollPercent = ({ poll }) => {
  const yesVotes = poll?.yesVotes;
  const totalVotes = poll?.noVotes + yesVotes;

  const yesVotePercentage = totalVotes ? ((yesVotes / totalVotes) * 100).toFixed(1) : 0;
  const wholeNumber = Math.floor(yesVotePercentage);
  const decimalNumber = Math.floor((yesVotePercentage % 1) * 10);

  return (
    <>
      <PollQuestionAndPercentContainer className='poll-question-and-percent-container'>
        <PollQuestion pollTitle={poll.title} />
        <div>
          <PollPercentageWholeNumber className='percentage-number-whole'>{wholeNumber}.</PollPercentageWholeNumber>
          <PollPercentageDecimalAndPercent className='percentage-number-decimal'>
            {decimalNumber}%
          </PollPercentageDecimalAndPercent>
        </div>
      </PollQuestionAndPercentContainer>
      <PollPercentageBar yesVotePercentage={yesVotePercentage} />
    </>
  );
};

export default PollPercent;
