import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/2451353-ai.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notFound} alt="" />
            <Link to="/">
                <div class="text-center">
                    <button type="button" class="btn btn-success">Centered button</button>
                </div>
            </Link>
        </div>
    );
};

export default NotFound;