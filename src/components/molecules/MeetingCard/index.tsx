import { useRef } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useAdjustNumberOfProfiles } from '../../../hooks';
import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';
import makeDateTimeString from '../../../utils/makeDatetimeString';
import { Avatar } from '../../atoms';

type Props = {
  id: number;
  title: string;
  address: string;
  startTime: string;
  profiles: string[];
  editLink?: string;
  onDeleteClick?: (id: number) => void;
};

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const SettingContainer = styled.div`
  display: flex;
`;

const EditLink = styled.a`
  ${semiBold16};
  display: block;
  padding: 10px 12px;
  text-decoration: none;
  color: ${colors.grayScale.gray04};
`;

const DeleteButton = styled.button`
  ${semiBold16};
  display: block;
  padding: 10px 12px;
  text-decoration: none;
  color: ${colors.etcColor.alertRed};
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
  id,
  title,
  address,
  startTime,
  profiles,
  editLink,
  onDeleteClick
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { numberOfOverflow, participantsToShow } = useAdjustNumberOfProfiles({
    profiles,
    cardWidth: cardRef.current?.clientWidth ?? 0
  });

  const { dateString, timeString } = makeDateTimeString(startTime);

  return (
    <Card>
      <TitleContainer>
        <MeetingTitle>{title}</MeetingTitle>
        {editLink && (
          <SettingContainer>
            <Link passHref href={editLink}>
              <EditLink>수정</EditLink>
            </Link>
            {onDeleteClick && (
              <DeleteButton type="button" onClick={() => onDeleteClick(id)}>
                삭제
              </DeleteButton>
            )}
          </SettingContainer>
        )}
      </TitleContainer>
      <MeetingLocation>{address}</MeetingLocation>
      <MeetingDate>{`${dateString} ${timeString}`}</MeetingDate>
      <ProfileImageContainer ref={cardRef}>
        {participantsToShow.map((URL) => (
          <ProfileImage proptype="image" key={URL} src={URL} />
        ))}
        {numberOfOverflow !== 0 && (
          <ProfileImage proptype="more-profile" count={numberOfOverflow} />
        )}
      </ProfileImageContainer>
    </Card>
  );
};

export default MeetingCard;
