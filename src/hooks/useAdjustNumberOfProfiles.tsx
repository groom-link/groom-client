import { useEffect, useState } from 'react';

const PROFILE_IMAGE_WIDTH = 44 + 8; // 44px: width of profile image, 8px: margin-right
const CARD_PADDING = 24; // 24px: padding of card

type Props = {
  profiles: string[];
  cardWidth: number;
};

const useAdjustNumberOfProfiles = ({ profiles, cardWidth }: Props) => {
  const [numberOfOverflow, setNumberOfOverflow] = useState(0);
  const [participantsToShow, setParticipantsToShow] = useState<string[]>([]);

  useEffect(() => {
    const numberOfParticipants = profiles.length;
    const numbeofCanbeShown = Math.floor(
      (cardWidth - CARD_PADDING) / PROFILE_IMAGE_WIDTH
    );
    if (numberOfParticipants > numbeofCanbeShown) {
      const numberOfOverflow = numberOfParticipants - numbeofCanbeShown;
      setParticipantsToShow(profiles.slice(0, numbeofCanbeShown - 1));
      setNumberOfOverflow(numberOfOverflow);
      return;
    }
    setParticipantsToShow(profiles);
    setNumberOfOverflow(0);
  }, [profiles, cardWidth]);

  return { numberOfOverflow, participantsToShow };
};

export default useAdjustNumberOfProfiles;
