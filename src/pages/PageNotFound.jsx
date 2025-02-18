import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/404", { replace: true });
    }, [navigate]);

	return (
		<div>
			<h1>Page not found</h1>
		</div>
	);
}

export default PageNotFound;