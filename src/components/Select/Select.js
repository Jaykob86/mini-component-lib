import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
			<select value={value} onChange={onChange}>
				{children}
			</select>
			<KeyIconContainer>
				<TextWrapper>
					{displayedValue}
				</TextWrapper>
				<IconWrapper>
					<Icon id="chevron-down"></Icon>
				</IconWrapper>
			</KeyIconContainer>
		</Wrapper>
  );
};

const Wrapper = styled.div`
	position: relative;
	height: 43px;
	border-radius: 8px;
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	width: fit-content;

	& select {
		opacity: 0;
		height: 100%;
		width: 100%;
		position: absolute;
		cursor: pointer;
	}

	&:hover {
		color: ${COLORS.black};
	}
`;

const TextWrapper = styled.div`
	position: relative;
	left: 0;

	font-size: 16px;
	pointer-events: none;

`;

const KeyIconContainer = styled.div`
	padding: 0 12px 0 16px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
`;

const IconWrapper = styled.div`
	height: 100%;
	display: flex;	
	align-items: center;
	position: relative;
	margin-left: 16px;
	pointer-events: none;
`;

export default Select;
