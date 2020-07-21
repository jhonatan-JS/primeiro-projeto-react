import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="Test">
                    <img
                        src="https://avatars0.githubusercontent.com/u/62979297?s=460&u=5cbe7ec6d7689ef8509b877d00333227424091ef&v=4"
                        alt="jhonatan-JS"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="Test">
                    <img
                        src="https://avatars0.githubusercontent.com/u/62979297?s=460&u=5cbe7ec6d7689ef8509b877d00333227424091ef&v=4"
                        alt="jhonatan-JS"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="Test">
                    <img
                        src="https://avatars0.githubusercontent.com/u/62979297?s=460&u=5cbe7ec6d7689ef8509b877d00333227424091ef&v=4"
                        alt="jhonatan-JS"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReactJS & React Native
                            forms!
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
