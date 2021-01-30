import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { ContainerLoader } from './styled';

export default function Loader() {
	return (
		<ContainerLoader>
			<IconContext.Provider
				value={{ color: '#273842', size: '80', className: 'rotate' }}
			>
				<BiLoaderAlt />
			</IconContext.Provider>
		</ContainerLoader>
	);
}
