import styled, { css } from 'styled-components';

export const ContainerBody = styled.div`
	display: flex;
	flex-direction: row;
	max-height: 130px;

	@media (max-width: 768px) {
		flex-direction: column;
		max-height: fit-content;
	}
`;

export const ContainerData = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: ${(props) => props.size};

	${(props) => {
		if (props.padding) {
			return css`
				padding: 0px 20px;

				@media (max-width: 768px) {
					padding: 20px 20px;
				}
			`;
		}
	}}

	img {
		object-fit: cover;
		height: 100%;
		border-radius: 100%;
		box-shadow: 0px 0px 11px 0px ${(props) => props.backgroundImg};
	}

	@media (max-width: 768px) {
		width: auto;

		img {
			max-width: 150px;
		}
	}
`;

export const ContainerButton = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-top: 15px;
`;

export const Button = styled.button`
	display: flex;
	place-content: center;
	flex-flow: wrap;
	background-color: ${(props) => props.backgroundImg};
	border: none;
	color: white;
	padding: 16px 32px;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
	margin: 4px 2px;
	transition-duration: 0.4s;
	cursor: pointer;
	background-color: white;
	color: ${(props) => props.backgroundImg};
	border: 2px solid ${(props) => props.backgroundImg};
	border-radius: 5px;
	width: 50%;

	:hover {
		background-color: ${(props) => props.backgroundImg};
		color: white;
	}
`;
