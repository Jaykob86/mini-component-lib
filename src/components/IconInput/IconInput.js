import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
		<Wrapper size={size} width={width}>
				<Icon id={icon} size={size === "small" ? "14" : "18"}></Icon>
				<InputField placeholder={placeholder}/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: ${({width}) => width}px;
	border-bottom: 1px solid ${COLORS.black};
`;

const InputField = styled.input`
	margin-left: 10px;
	border: none;
	background-color: transparent;
	font-size: ${({size}) => size === "small" ? "14px" : "18px"};
`;

export default IconInput;
