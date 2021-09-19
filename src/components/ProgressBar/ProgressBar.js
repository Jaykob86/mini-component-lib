/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size}>
		<Bar value={value}/>
		{value}
	</Wrapper>;
};

const sizes = { small:"small", medium:"medium", large:"large" }

const height = size => 
{
	switch (size) {
		case sizes.small:
			return "8px";
		case sizes.medium:
			return "12px";
		case sizes.large:
			return "24px";
		default:
			return "12px";
		}
};

const padding = size => {
	switch (size) {
		case sizes.large:
			return "4px";	
		default:
			return "0";
	}
}

const rightBorderRadius = value => {
	switch (value) {
		case 100:
			return "inherit";
		default:
			return "0";
	}
}

const Wrapper = styled.div`
	position: relative;
	background-color: ${COLORS.transparentGray15};
	height: ${({size}) => height(size)};
	width: 200px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	padding: ${({size}) => padding(size)};
`;

const Bar = styled.div`
	position: relative;
	background-color: ${COLORS.primary};
	height: 100%;
	width: ${({value}) => value + "%"};
	border-radius: inherit;
	border-top-right-radius: ${({value}) => rightBorderRadius(value)};
	border-bottom-right-radius: ${({value}) => rightBorderRadius(value)};
`;

export default ProgressBar;
