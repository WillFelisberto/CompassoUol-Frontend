import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearRepositories,
	requestRepositories,
} from '../../store/repositories/actions';
import { clearStarred, requestStarred } from '../../store/starred/actions';
import { GoRepoPull } from 'react-icons/go';
import { ContainerRepos, ContainerEmpty } from './styled';
import { DividerComponent } from '../common';
import Loader from '../common/Loader';

export default function Repositories({ repoType, user }) {
	const starred = useSelector((state) => state.starred);
	const repositories = useSelector((state) => state.repositories);
	const [empty, setEmpty] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			(!starred.loading &&
				starred.loaded &&
				!starred.error &&
				starred.data.length === 0) ||
			(!repositories.loading &&
				repositories.loaded &&
				!repositories.error &&
				repositories.data.length === 0)
		) {
			setEmpty(true);
		}
	}, [starred, repositories]);

	useEffect(() => {
		if (repoType === 'repositories') {
			dispatch(clearStarred());
			dispatch(requestRepositories(user));
		} else {
			dispatch(clearRepositories());
			dispatch(requestStarred(user));
		}
	}, [repoType, dispatch, user]);

	const loadedRepo =
		repositories.data.length > 0
			? repositories.data
			: starred.data.length > 0
			? starred.data
			: [];

	return (
		<ContainerRepos>
			<DividerComponent />

			{empty ? (
				<ContainerEmpty>
					{`${user} doesn’t have any
				${repoType === 'repositories' ? 'public ' : 'starred '} repositories
				yet!`}
					<span role="img" aria-label="confused">
						😕
					</span>
				</ContainerEmpty>
			) : (
				<>
					{loadedRepo.length > 0 ? (
						loadedRepo.map((el, i) => {
							const options = {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							};
							return (
								<a href={el.html_url} rel="noreferrer" target="_blank" key={i}>
									<span className="title">
										<p style={{ paddingRight: '8px' }}>
											<GoRepoPull />
										</p>
										<p className="textShort">{el.name}</p>
									</span>

									<span>{el.description}</span>

									<span>
										{`Updated on 
								${new Date(el.updated_at).toLocaleDateString('en-US', options)}`}
									</span>
								</a>
							);
						})
					) : (
						<Loader />
					)}
				</>
			)}
		</ContainerRepos>
	);
}
