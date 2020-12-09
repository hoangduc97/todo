import React, { useEffect } from 'react';
import CustomLink from '../../components/link/custom_link.component';
import ListTask from '../../components/listtask/list_task.component';
import { addList, deleteList, getAllList, updateList } from './home.action';
import { connect } from 'react-redux';
import './home.scss';

const Home = (props) => {
    useEffect(() => {
        props.getAllList();
    }, [props.getAllList]);

    return (
        <div className="home">
            <button className="button home__button">new list</button>
            <ul className="home__list">
                {props.lists &&
                    props.lists.map((ele, index) => (
                        <CustomLink
                            key={index}
                            to={'/lists/' + ele._id}
                            children={<ListTask {...ele} />}
                        />
                    ))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ HomeReducer }) => ({
    lists: HomeReducer.lists,
});

const mapDispatchToProps = (dispatch) => ({
    getAllList: () => dispatch(getAllList()),
    addList: (list) => dispatch(addList(list)),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
