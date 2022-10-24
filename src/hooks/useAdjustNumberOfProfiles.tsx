import { useEffect, useState } from 'react';

import { Participant } from '../pages/group';

const PROFILE_IMAGE_WIDTH = 44 + 8; // 44px: width of profile image, 8px: margin-right
const CARD_PADDING = 24; // 24px: padding of card

type Props = {
  participants: Participant[];
  cardWidth: number;
};

const useAdjustNumberOfProfiles = ({ participants, cardWidth }: Props) => {
  const [numberOfOverflow, setNumberOfOverflow] = useState(0);
  const [participantsToShow, setParticipantsToShow] = useState<Participant[]>(
    []
  );

  useEffect(() => {
    const numberOfParticipants = participants.length;
    const numbeofCanbeShown = Math.floor(
      (cardWidth - CARD_PADDING) / PROFILE_IMAGE_WIDTH
    );
    if (numberOfParticipants > numbeofCanbeShown) {
      const numberOfOverflow = numberOfParticipants - numbeofCanbeShown;
      setParticipantsToShow(participants.slice(0, numbeofCanbeShown - 1));
      setNumberOfOverflow(numberOfOverflow);
      return;
    }
    setParticipantsToShow(participants);
    setNumberOfOverflow(0);
  }, [participants, cardWidth]);

  return { numberOfOverflow, participantsToShow };
};

export default useAdjustNumberOfProfiles;
