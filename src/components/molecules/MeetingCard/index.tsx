import { useRef } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useAdjustNumberOfProfiles } from '../../../hooks';
import { Participant } from '../../../pages/group';
import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';
import { Avatar } from '../../atoms';

type Props = {
  title: string;
  location: string;
  date: string;
  participants: Participant[];
  editLink?: string;
};

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const EditLink = styled.a`
  ${semiBold16};
  display: block;
  padding: 10px 12px;
  text-decoration: none;
  color: ${colors.grayScale.gray04};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MeetingTitle = styled.h3`
  ${semiBold20}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray05};
`;

const MeetingLocation = styled.span`
  ${medium12};
  display: block;
  margin-bottom: 4px;
  color: ${colors.grayScale.gray04};
`;

const MeetingDate = styled.time`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const ProfileImage = styled(Avatar)`
  margin-right: 8px;
`;

const MeetingCard = ({
  title,
  location,
  date,
  participants,
  editLink
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { numberOfOverflow, participantsToShow } = useAdjustNumberOfProfiles({
    participants,
    cardWidth: cardRef.current?.clientWidth ?? 0
  });

  return (
    <Card>
      <TitleContainer>
        <MeetingTitle>{title}</MeetingTitle>
        {editLink && (
          <Link passHref href={editLink}>
            <EditLink>수정</EditLink>
          </Link>
        )}
      </TitleContainer>
      <MeetingLocation>{location}</MeetingLocation>
      <MeetingDate>{date}</MeetingDate>
      <ProfileImageContainer ref={cardRef}>
        {participantsToShow.map(({ id, URL }) => (
          <ProfileImage proptype="image" key={id} src={URL} />
        ))}
        {numberOfOverflow !== 0 && (
          <ProfileImage proptype="more-profile" count={numberOfOverflow} />
        )}
      </ProfileImageContainer>
    </Card>
  );
};

export default MeetingCard;
