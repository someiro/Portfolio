import { Navigate, useLocation } from 'react-router-dom';
import { Container, Spacer } from './components/liminal';
import parse from 'html-react-parser';

const Project = () => {

    const location = useLocation();
    const content = location.state || null;

    if (content === null) {
        return <Navigate to="/" replace />;
    }

    return (
        <Container padding>
            <img width="100%" src={content.thumbnail["url"]} style={{ boxShadow: "0px 2px 8px -4px #777777" }} />
            <Spacer size={30} />

            <h1>{content.title}</h1>
            <Spacer size={40} />

            <h3>Tech Stack</h3>
            <p>{content.stack}</p>
            <Spacer size={20} />

            <h3>URL</h3>
            <a href={content.url} target="_blank" rel="noopener noreferrer">
                <p>{content.url}</p>
            </a>
            <Spacer size={20} />

            <div>
                {parse(content.body)}
            </div>
        </Container>
    )
};

export default Project;