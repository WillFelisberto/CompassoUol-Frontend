import styled from 'styled-components';

export const ContainerLoader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.rotate {
		animation: rotate 1.5s linear infinite;
	}
	@keyframes rotate {
		to {
			transform: rotate(360deg);
		}
	}
`;
