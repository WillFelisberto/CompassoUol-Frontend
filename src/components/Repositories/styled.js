import styled from 'styled-components';

export const ContainerRepos = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	padding-top: 15px;

	.title {
		font-size: 24px;
		font-weight: bolder;
		display: flex;
		padding-bottom: 10px;
	}

	.textShort {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	a {
		padding: 20px;
		color: #3a3a3a;
		text-decoration: none;
		display: flex;
		flex-direction: column;

		:hover {
			background-color: #e2e2e2;
		}

		span {
			padding-bottom: 10px;
		}
	}
`;

export const ContainerEmpty = styled.div`
	font-size: 22px;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-self: center;
`;
