import React, { useState, lazy, Suspense } from 'react';
import {
	ContainerBody,
	Button,
	ContainerData,
	ContainerButton,
} from './styled';
import { usePalette } from 'react-palette';
import { GoRepo, GoStar } from 'react-icons/go';
import Loader from '../common/Loader';
const Repositories = lazy(() => import('../Repositories'));

export default function UserCard({ user }) {
	const { data } = usePalette(user.avatar_url);
	const [loadRepos, setLoadRepos] = useState(false);
	const [repoType, setRepoType] = useState('');

	const RenderComponent = (type) => {
		setLoadRepos(true);
		setRepoType(type);
	};

	return (
		<>
			<ContainerBody>
				<ContainerData size={'25%'} backgroundImg={data.vibrant}>
					<img alt={user.name} src={user.avatar_url}></img>
				</ContainerData>
				<ContainerData size={'75%'} padding style={{ placeItems: 'self-end' }}>
					<h1>{user.name}</h1>
					<span>{user.login}</span>

					<div>
						{user.followers} followers {' · '}
						{user.following} following
					</div>

					<ContainerButton>
						<Button
							backgroundImg={data.vibrant}
							onClick={() => RenderComponent('repositories')}
						>
							<GoRepo />
							Repositories
						</Button>
						<Button
							backgroundImg={data.vibrant}
							onClick={() => RenderComponent('starred')}
						>
							<GoStar />
							Starred
						</Button>
					</ContainerButton>
				</ContainerData>
			</ContainerBody>
			{loadRepos ? (
				<Suspense fallback={<Loader />}>
					<Repositories repoType={repoType} user={user.login} />
				</Suspense>
			) : null}
		</>
	);
}
