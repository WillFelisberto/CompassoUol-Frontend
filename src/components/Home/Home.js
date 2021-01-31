import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Container, Form, SubmitButton, Erro } from './styled';
import { FaGithub, FaSpinner } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, requestUser } from '../../store/user/actions';
import { clearStarred } from '../../store/starred/actions';
import { clearRepositories } from '../../store/repositories/actions';
import Loader from '../common/Loader';
import Favicon from 'react-favicon';
import githubFav from '../../assets/img/github.png';

const UserCard = lazy(() => import('../UserCard/UserCard'));

export default function Home() {
	const [newRepo, setNewRepo] = useState('');
	const [loading, setLoading] = useState(false);
	const repositories = useSelector((state) => state.user);
	const [user, setUser] = useState('');
	const [errors, setErros] = useState(false);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setNewRepo(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUser('');
		dispatch(clearRepositories());
		dispatch(clearStarred());
		dispatch(requestUser(newRepo));
		setLoading(true);
	};

	useEffect(() => {
		if (!repositories.loading && repositories.loaded && !repositories.error) {
			setUser(repositories.data);
			setLoading(false);
			setErros(false);
		} else if (
			!repositories.loading &&
			repositories.loaded &&
			repositories.error
		) {
			setErros(true);
			setUser('');
			dispatch(clearUser());
		}
	}, [repositories, dispatch]);

	return (
		<>
			<Favicon url={githubFav} />

			<Container style={{ marginBottom: 10 }}>
				<h1>
					<FaGithub />
					Github Repositories Search
				</h1>
				<Form onSubmit={handleSubmit}>
					<input
						required
						type="text"
						readOnly={loading && !errors ? true : false}
						placeholder="Enter a Github username"
						value={newRepo}
						onChange={handleInputChange}
					/>

					<SubmitButton>
						{loading && !errors ? (
							<FaSpinner color="#FFF" size={14} />
						) : (
							<BiSend color="FFF" size={14} />
						)}
					</SubmitButton>
				</Form>
				{errors ? <Erro>Repositório inválido!</Erro> : ''}
			</Container>
			{user ? (
				<Container style={{ marginTop: 10 }}>
					<Suspense fallback={<Loader />}>
						<UserCard user={user} />
					</Suspense>
				</Container>
			) : null}
		</>
	);
}
