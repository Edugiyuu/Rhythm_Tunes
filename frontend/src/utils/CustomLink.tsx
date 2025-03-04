import { Link } from 'react-router-dom';

const CustomLink = ({ to, title, className }: any) => {
    return (
        <Link to={to} className={className}>
            {title}
        </Link>
    );
};

export default CustomLink;